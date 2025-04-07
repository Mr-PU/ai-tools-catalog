import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-[#008080] border-b border-[#006666]"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-xl font-bold text-white">AI Tools Catalog</h1>
              <p className="text-sm text-white/80">Discover the best AI tools</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-white hover:text-white/80 transition-colors"
            >
              Menu
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-[60]"
              >
                <a
                  href="#Contact"
                  className="block px-4 py-2 text-[#004d4d] hover:bg-[#f0f9f9] transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#about"
                  className="block px-4 py-2 text-[#004d4d] hover:bg-[#f0f9f9] transition-colors"
                >
                  About
                </a>
                <div className="border-t border-[#e0f0f0] mt-2 pt-2">
                  <p className="px-4 py-2 text-xs text-[#006666]">
                    Maintained and Managed by Prashant Upadhyay
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 