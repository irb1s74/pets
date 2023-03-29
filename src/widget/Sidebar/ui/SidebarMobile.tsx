import classNames from 'classnames'
import styles from './SidebarMobile.module.scss'
import { memo } from 'react'

interface SidebarMobileProps {
  className?: string
}

export const SidebarMobile = memo((props: SidebarMobileProps) => {
  const { className } = props
  return <div className={classNames(styles.SidebarMobile, {}, [className])}></div>
})
