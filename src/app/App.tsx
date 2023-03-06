import classNames from 'classnames'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      SomeText
    </div>
  )
}
