import { MainPage } from 'pages/MainPage'

import { AppRoutes, getRouteMain } from 'shared/const/router'
import { RouteProps } from 'react-router-dom'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
}
