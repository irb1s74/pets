import {
  AppRoutes,
  getRouteBlog,
  getRouteChat,
  getRouteLogin,
  getRouteMain,
  getRoutePetDetails,
  getRoutePets,
  getRouteProfile,
  getRouteSignUp,
  getRouteStart,
} from 'shared/const/router'
import { StartPage } from 'pages/StartPage'
import { MainPage } from 'pages/MainPage'
import { PetsPage } from 'pages/PetsPage'
import { LoginPage } from 'pages/LoginPage'
import { SignUpPage } from 'pages/SignUpPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { BlogPage } from 'pages/BlogPage'
import { ChatPage } from 'pages/ChatPage'
import { ProfilePage } from 'pages/ProfilePage'
import { PetDetailsPage } from 'pages/PetDetailsPage'
import { AppRoutesProps } from '../config/routerTypes'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.START]: {
    path: getRouteStart(),
    element: <StartPage />,
  },
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    pageTitle: 'Home',
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.PET_DETAILS]: {
    path: getRoutePetDetails(':id'),
    pageTitle: 'Питомцы',
    element: <PetDetailsPage />,
    useGoBack: true,
    authOnly: true,
  },
  [AppRoutes.PETS]: {
    path: getRoutePets(),
    pageTitle: 'Питомцы',
    element: <PetsPage />,
    authOnly: true,
  },
  [AppRoutes.BLOG]: {
    path: getRouteBlog(),
    element: <BlogPage />,
    pageTitle: 'Новости',
    authOnly: true,
  },
  [AppRoutes.CHAT]: {
    path: getRouteChat(),
    element: <ChatPage />,
    pageTitle: 'Чат',
    authOnly: true,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(),
    pageTitle: 'Профиль',
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
