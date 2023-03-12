import {
  AppRoutes,
  getRouteLogin,
  getRouteMain,
  getRouteSignUp,
  getRouteStart,
} from 'shared/const/router'
import { RouteProps } from 'react-router-dom'
import { StartPage } from 'pages/StartPage'
import { MainPage } from 'pages/MainPage'
import { LoginPage } from 'pages/LoginPage'
import { SignUpPage } from 'pages/SignUpPage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
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
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.SIGNUP]: {
    path: getRouteSignUp(),
    element: <SignUpPage />,
  },
}
