import { Message } from './Message'

export interface Chat {
  id: number
  title: string
  avatar: string
  lastMessage: string
  date: string
  messages: Message[]
}
