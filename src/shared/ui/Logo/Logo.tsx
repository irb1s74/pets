import { memo } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import Hugs from 'shared/assets/icons/logo.svg'
import HugsDark from 'shared/assets/icons/logo-dark.svg'
import classNames from 'classnames'
import './Logo.scss'

interface LogoProps {
  className?: string
  size?: string
}

export const Logo = memo(({ className, size = 'small' }: LogoProps) => {
  const { theme } = useTheme()

  const mods = {
    ['Logo-large']: size === 'large',
    ['Logo-small']: size === 'small',
    ['Logo-medium']: size === 'medium',
  }

  return (
    <div className={classNames('Logo', mods, [className])}>
      {theme === 'app_dark_theme' ? <Hugs /> : <HugsDark />}
    </div>
  )
})
