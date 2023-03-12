import styles from './Header.module.scss'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import { Avatar } from 'shared/ui/Avatar'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

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
        <Avatar size={45} src={user?.avatar} alt={user?.username} online={true} />
      </div>
    </header>
  )
}
