import { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { Portal } from 'shared/ui/Portal'
import { Text } from 'shared/ui/Text'
import Logout from 'shared/assets/icons/logout.svg'
import Close from 'shared/assets/icons/largeClose.svg'
import { SidebarMobileNav } from './SidebarMobileNav'
import classNames from 'classnames'
import styles from './SidebarMobile.module.scss'

interface SidebarMobileProps {
  className?: string
}

export const SidebarMobile = memo((props: SidebarMobileProps) => {
  const { className } = props
  const dispatch = useDispatch()
  const [isCollapsed, setCollapsed] = useState(false)

  const handleOpenMenu = () => {
    setCollapsed(true)
  }
  const handleCloseMenu = useCallback(() => setCollapsed(false), [])
  const handleLogout = () => {
    dispatch(userActions.logout())
  }

  const mod = {
    [styles.SidebarMobile__menuOpen]: isCollapsed,
  }
  return (
    <div className={classNames(styles.SidebarMobile, {}, [className])}>
      <div onClick={handleOpenMenu} className={styles.SidebarMobile__btn}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
      <Portal>
        <div className={classNames(styles.SidebarMobile__menu, mod)}>
          <div onClick={handleCloseMenu} className={styles.closeBtn}>
            <Close />
          </div>
          <SidebarMobileNav handleCloseMenu={handleCloseMenu} />
          <div onClick={handleLogout} className={styles.logout}>
            <div className={styles.logout__icon}>
              <Logout />
            </div>
            <Text size={16} weight='Bold' text='Logout' />
          </div>
        </div>
      </Portal>
    </div>
  )
})
