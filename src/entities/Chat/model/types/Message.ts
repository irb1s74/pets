import { User } from 'entities/User'

export interface Message {
  id: number
  author: User
  type: string
  content: string
  date: string
}
