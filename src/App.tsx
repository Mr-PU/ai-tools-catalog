import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { tools } from './data/tools'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ToolCard from './components/ToolCard'
import About from './pages/About'
import Contact from './pages/Contact'

const ITEMS_PER_PAGE = 21

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredTools.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentTools = filteredTools.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const categories = Array.from(new Set(tools.map(tool => tool.category)))

  return (
    <Router>
      <div className="min-h-screen bg-[#008080]">
        <nav className="bg-white/10 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-white">
                    AI Tools Catalog
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link to="/about" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-64">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>
                <div className="flex-1">
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                  {currentTools.length === 0 ? (
                    <div className="mt-6 text-center text-white/90">
                      No tools found matching your criteria.
                    </div>
                  ) : (
                    <>
                      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {currentTools.map(tool => (
                          <ToolCard key={tool.id} tool={tool} />
                        ))}
                      </div>
                      
                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className="mt-8 flex justify-center space-x-2">
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20"
                          >
                            Previous
                          </button>
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`px-4 py-2 rounded-md ${
                                currentPage === page
                                  ? 'bg-white text-[#008080]'
                                  : 'bg-white/10 text-white hover:bg-white/20'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App 