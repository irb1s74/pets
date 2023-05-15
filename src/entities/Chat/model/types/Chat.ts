import { User } from 'entities/User'

export interface Chat {
  id: number
  createdAt: string
  users: User[]
}
