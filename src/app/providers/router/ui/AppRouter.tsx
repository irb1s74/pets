import { memo, Suspense, useCallback } from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { RequireNoAuth } from 'app/providers/router/ui/RequireNoAuth'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  noAuthOnly?: boolean
}
const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<>loader</>}>{route.element}</Suspense>

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{element}</RequireAuth>
          ) : route.noAuthOnly ? (
            <RequireNoAuth>{element}</RequireNoAuth>
          ) : (
            element
          )
        }
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
