import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar'
import ToolCard from '../components/ToolCard'
import CategoryFilter from '../components/CategoryFilter'
import { Tool } from '../types'
import toolsData from '../data/tools.json'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [tools, setTools] = useState<Tool[]>([])

  useEffect(() => {
    console.log('Tools data:', toolsData)
    // Ensure we're accessing the correct property from the JSON
    setTools(toolsData.tools || [])
  }, [])

  const filteredTools = tools.filter((tool: Tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">AI Tools Catalog</h1>
        <p className="text-lg text-gray-600">
          Discover the best AI tools for your needs
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-3/4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="w-full md:w-1/4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {tools.length === 0 ? (
        <div className="text-center text-gray-600">Loading tools...</div>
      ) : filteredTools.length === 0 ? (
        <div className="text-center text-gray-600">No tools found matching your criteria.</div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredTools.map((tool: Tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </motion.div>
      )}
    </div>
  )
} 