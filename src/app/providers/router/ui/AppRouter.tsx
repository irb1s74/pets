import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'
import { AppRoutesProps } from '../config/types'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {

    const element = (
      <Suspense fallback={<>loader</>}>{route.element}</Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <>
              авторизация
              {element}
            </>
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
