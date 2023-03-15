import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text'
import { AppImage } from 'shared/ui/AppImage'
import { getUserAuthData } from '../../model/selectors/getUserAuthData'
import HumanWithDog from 'shared/assets/images/HumanWithDog.png'
import BackElements from 'shared/assets/images/backGreetings.png'
import styles from './UserGreetings.module.scss'
import classNames from 'classnames'

interface UserGreetingsProps {
  className?: string
}

export const UserGreetings = memo((props: UserGreetingsProps) => {
  const user = useSelector(getUserAuthData)

  const { className } = props
  return (
    <div className={classNames(styles.UserGreetings, {}, [className])}>
      <div className={styles.texts}>
        <Text size={24} weight='medium' text={`С возвращением, ${user.username}`} />
        <Text className={styles.mt20} size={16} text='Не забудь покормить своего питомца' />
        <Text className={styles.mt10} size={16} text='Хорошего дня!' />
      </div>
      <AppImage src={HumanWithDog} />
      <AppImage className={styles.UserGreetings__back} src={BackElements} />
    </div>
  )
})
