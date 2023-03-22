import { useSelector } from 'react-redux'
import { ThemeSwitcher } from 'feature/ThemeSwitcher'
import { NotificationButton } from 'feature/NotificationButton'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import Arrow from 'shared/assets/icons/headerArrow.svg'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  className?: string
  useGoBack?: boolean
  pageTitle?: string
}

export const Header = (props: HeaderProps) => {
  const { className, pageTitle, useGoBack } = props
  const user = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <header className={classNames(styles.Header, {}, [className])}>
      <div className={styles.Header__title}>
        {useGoBack && (
          <div onClick={handleGoBack} className={styles.arrow}>
            <Arrow />
          </div>
        )}
        <Text size={40} weight='bold' text={pageTitle} />
      </div>
      <div className={styles.Header__actions}>
        <ThemeSwitcher className={styles.switcher} />
        <NotificationButton className={styles.alertBtn} />
        <Avatar size={45} src={user?.avatar} alt={user?.username} online={true} />
      </div>
    </header>
  )
}
