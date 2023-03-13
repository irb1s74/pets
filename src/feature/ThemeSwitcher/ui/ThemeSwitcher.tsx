import { memo } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { Theme } from 'shared/const/theme'
import Sun from 'shared/assets/icons/sun.svg'
import Moon from 'shared/assets/icons/moon.svg'
import classNames from 'classnames'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <label onClick={toggleTheme} className={classNames(styles.ThemeSwitcher, {}, [className])}>
      <Moon
        className={classNames(styles.ThemeSwitcher__svg, {
          [styles.darkSvg]: theme === Theme.LIGHT,
        })}
      />
      <Sun
        className={classNames(styles.ThemeSwitcher__svg, {
          [styles.darkSvg]: theme !== Theme.LIGHT,
        })}
      />
      <span
        className={classNames(styles.ThemeSwitcher__span, {
          [styles.sunActive]: theme === Theme.LIGHT,
        })}
      />
    </label>
  )
})
