import { memo } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { Theme } from 'shared/const/theme'
import Sun from 'shared/assets/icons/sun.svg'
import Moon from 'shared/assets/icons/moon.svg'
import classNames from 'classnames'
import './ThemeSwitcher.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <label onClick={toggleTheme} className={classNames('theme-switcher', {}, [className])}>
      <Moon
        className={classNames('theme-switcher__svg', {
          ['theme-switcher__svg_dark']: theme === Theme.LIGHT,
        })}
      />
      <Sun
        className={classNames('theme-switcher__svg', {
          ['theme-switcher__svg_dark']: theme !== Theme.LIGHT,
        })}
      />
      <span
        className={classNames('theme-switcher__span', {
          ['theme-switcher__span_active']: theme === Theme.LIGHT,
        })}
      />
    </label>
  )
})
