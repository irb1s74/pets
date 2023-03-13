import { useSelector } from 'react-redux'
import { ThemeSwitcher } from 'feature/ThemeSwitcher'
import { NotificationButton } from 'feature/NotificationButton'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import classNames from 'classnames'
import styles from './Header.module.scss'

interface HeaderProps {
  className?: string

  pageTitle?: string
}

export const Header = (props: HeaderProps) => {
  const { className, pageTitle } = props
  const user = useSelector(getUserAuthData)

  return (
    <header className={classNames(styles.Header, {}, [className])}>
      <Text size={40} weight='bold' text={pageTitle} />
      <div className={styles.Header__actions}>
        <ThemeSwitcher className={styles.switcher} />
        <NotificationButton className={styles.alertBtn} />
        <Avatar size={45} src={user?.avatar} alt={user?.username} online={true} />
      </div>
    </header>
  )
}
