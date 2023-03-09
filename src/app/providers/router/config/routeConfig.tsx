import { AppRoutes, getRouteMain } from 'shared/const/router'
import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
}
