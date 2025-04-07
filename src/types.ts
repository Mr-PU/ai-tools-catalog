import { Tool } from './types/tool'

export interface ToolCardProps {
  tool: Tool
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  url: string
  pricing: 'Free' | 'Freemium' | 'Paid'
  tags: string[]
} 