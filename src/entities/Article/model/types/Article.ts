export interface Article {
  id: number
  body: string
  time: string
  author: string
  status: string

  images: string[]
  avatar: string | null
}
