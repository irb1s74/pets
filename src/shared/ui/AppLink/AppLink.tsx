import { Link, LinkProps } from 'react-router-dom'
import { memo, ReactNode } from 'react'
import styles from './AppLink.module.scss'
import classNames from 'classnames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, { [styles[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  )
})
