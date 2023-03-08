import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}
export enum AppRoutes {
  MAIN = 'main',
}

export const getRouteMain = () => '/'
