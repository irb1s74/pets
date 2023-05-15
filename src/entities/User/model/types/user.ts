export interface User {
  id: number
  username: string
  avatar: string
  status: string
  dateOfBirth: string
  location: string
  token?: string
}

export interface UserSchema {
  authData?: User

  _inited: boolean
}
