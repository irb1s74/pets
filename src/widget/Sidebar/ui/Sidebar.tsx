import { Logo } from 'shared/ui/Logo'
import Logout from 'shared/assets/icons/logout.svg'
import classNames from 'classnames'
import styles from './Sidebar.module.scss'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { SidebarNav } from 'widget/Sidebar/ui/SidebarNav'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userActions.logout())
  }

  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      <Logo className={styles.Sidebar__logo} />
      <SidebarNav />
      <div onClick={handleLogout} className={styles.Sidebar__logoutBtn}>
        <Logout />
      </div>
    </div>
  )
})
