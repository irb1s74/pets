import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { getRouteStart } from 'shared/const/router'

interface RequireAuthProps {
  children: JSX.Element
}

export function RequireAuth({ children }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={getRouteStart()} state={{ from: location }} replace />
  }

  return children
}
