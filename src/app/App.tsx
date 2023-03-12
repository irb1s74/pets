import { Suspense, useEffect } from 'react'
import { LaunchPage } from 'pages/LaunchPage'
import { getUserInited, userActions } from 'entities/User'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import AppRouter from 'app/providers/router/ui/AppRouter'

import './styles/index.scss'
import { useSelector } from 'react-redux'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<LaunchPage />}>{inited ? <AppRouter /> : <LaunchPage />}</Suspense>
    </div>
  )
}
