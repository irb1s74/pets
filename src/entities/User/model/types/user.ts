export interface User {
  id: string
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
