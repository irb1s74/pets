import { AppRoutes, getRouteMain } from 'shared/const/router'
import { RouteProps } from 'react-router-dom'
// import { MainPage } from 'pages/MainPage'
import { StartPage } from 'pages/StartPage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <StartPage />,
    // element: <MainPage />,
  },
}
