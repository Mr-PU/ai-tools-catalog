import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { Tool } from '../data/tools'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      className="group card p-6 bg-[#f0f9f9] border border-[#e0f0f0] rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[#004d4d] group-hover:text-primary transition-colors duration-300">
              {tool.name}
            </h3>
            <p className="text-sm text-[#006666] mt-1">{tool.category}</p>
          </div>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            {tool.pricing}
          </span>
        </div>

        <p className="text-sm text-[#006666] mb-4 flex-grow leading-relaxed">
          {tool.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags?.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#e0f0f0]">
          <div className="flex items-center gap-1.5 text-primary">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Featured</span>
          </div>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
          >
            Learn More
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
} 