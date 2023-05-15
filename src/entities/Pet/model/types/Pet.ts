import { User } from 'entities/User'

export interface Pet {
  id: number
  name: string
  gender: boolean
  description: string
  purposeOfPosting: string
  images: string[]
  type: string
  breed: string
  dateOfBirth: string
  weight: number
  country: string
  city: string
  likes: number
  author: User
}
