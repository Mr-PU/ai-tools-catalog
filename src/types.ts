// Remove this conflicting import
// import { Tool } from './types/tool'

// Define Tool interface first as it's used by ToolCardProps
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  tags: string[];
}

export interface ToolCardProps {
  tool: Tool;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}