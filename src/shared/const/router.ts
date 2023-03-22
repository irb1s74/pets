export enum AppRoutes {
  START = '',
  MAIN = 'main',
  PETS = 'pets',
  PET_DETAILS = 'PET_DETAILS',
  BLOG = 'blog',
  CHAT = 'chat',
  PROFILE = 'profile',
  LOGIN = 'login',
  SIGNUP = 'signUp',
  NOT_FOUND = 'not_found',
}

export const getRouteStart = () => '/'
export const getRouteMain = () => '/home'
export const getRoutePets = () => '/pets'
export const getRoutePetDetails = (id: string) => `/pets/${id}`
export const getRouteBlog = () => '/blog'
export const getRouteChat = () => '/chat'
export const getRouteProfile = () => '/profile'
export const getRouteLogin = () => '/login'
export const getRouteSignUp = () => '/signup'
