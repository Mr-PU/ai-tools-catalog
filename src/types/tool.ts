export interface Tool {
  id: string
  name: string
  description: string
  category: string
  url: string
  pricing: 'Free' | 'Freemium' | 'Paid'
  tags: string[]
} 