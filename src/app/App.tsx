import { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LaunchPage } from 'pages/LaunchPage'
import { getUserInited, initialAuth } from 'entities/User'
import { AppRouter } from 'app/providers/router'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initialAuth())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<LaunchPage />}>{inited ? <AppRouter /> : <LaunchPage />}</Suspense>
    </div>
  )
}
