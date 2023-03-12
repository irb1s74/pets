import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { getRouteMain } from 'shared/const/router'

interface RequireAuthProps {
  children: JSX.Element
}

export function RequireNoAuth({ children }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />
  }

  return children
}
