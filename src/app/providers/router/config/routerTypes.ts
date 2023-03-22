import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  pageTitle?: string
  noAuthOnly?: boolean
  useGoBack?: boolean
}
