import { User } from 'entities/User'

export interface Article {
  id: number
  description: string
  images: string[]
  likes: number
  comments: number
  createdAt: string
  author: User
}
