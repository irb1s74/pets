import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widget/PageLoader'
import { RequireAuth } from '../ui/RequireAuth'
import { RequireNoAuth } from '../ui/RequireNoAuth'
import { routeConfig } from '../config/routeConfig'
import { AppRoutesProps } from '../config/routerTypes'
import { AnimatePresence } from 'framer-motion'
import { Page } from 'widget/Page'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence>{route.element}</AnimatePresence>
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>
              <Page title={route.pageTitle}>{element}</Page>
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
}

export default memo(AppRouter)
