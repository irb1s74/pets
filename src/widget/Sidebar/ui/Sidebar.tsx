import { Logo } from 'shared/ui/Logo'
import Logout from 'shared/assets/icons/logout.svg'
import classNames from 'classnames'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      <Logo className={styles.Sidebar__logo} />
      <div className={styles.Sidebar__logoutBtn}>
        <Logout />
      </div>
    </div>
  )
}
