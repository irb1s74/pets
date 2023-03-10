import { Suspense } from 'react'
import { LaunchPage } from 'pages/LaunchPage'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import classNames from 'classnames'
import AppRouter from 'app/providers/router/ui/AppRouter'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<LaunchPage />}>
        <AppRouter />
      </Suspense>
    </div>
  )
}
