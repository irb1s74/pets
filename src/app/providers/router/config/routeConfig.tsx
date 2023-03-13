import {
  AppRoutes,
  getRouteBlog,
  getRouteChat,
  getRouteLogin,
  getRouteMain,
  getRoutePets,
  getRouteProfile,
  getRouteSignUp,
  getRouteStart,
} from 'shared/const/router'
import { RouteProps } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { MainPage } from 'pages/MainPage'
import { PetsPage } from 'pages/PetsPage'
import { LoginPage } from 'pages/LoginPage'
import { SignUpPage } from 'pages/SignUpPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { BlogPage } from 'pages/BlogPage'
import { ChatPage } from 'pages/ChatPage'
import { ProfilePage } from 'pages/ProfilePage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  noAuthOnly?: boolean
}
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.START]: {
    path: getRouteStart(),
    element: <StartPage />,
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.PETS]: {
    path: getRoutePets(),
    element: <PetsPage />,
    authOnly: true,
  },
  [AppRoutes.BLOG]: {
    path: getRouteBlog(),
    element: <BlogPage />,
    authOnly: true,
  },
  [AppRoutes.CHAT]: {
    path: getRouteChat(),
    element: <ChatPage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
    noAuthOnly: true,
  },
  [AppRoutes.SIGNUP]: {
    path: getRouteSignUp(),
    element: <SignUpPage />,
    noAuthOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
