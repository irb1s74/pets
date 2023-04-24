import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Page } from 'widget/Page'
import { PageLoader } from 'widget/PageLoader'
import { RequireAuth } from '../ui/RequireAuth'
import { RequireNoAuth } from '../ui/RequireNoAuth'
import { AppRoutesProps } from '../config/routerTypes'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>
              <Page useGoBack={route.useGoBack} title={route.pageTitle}>
                {element}
              </Page>
            </RequireAuth>
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
})
