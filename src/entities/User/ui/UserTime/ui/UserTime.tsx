import { Text } from 'shared/ui/Text'
import Clock from 'shared/assets/icons/clock.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import styles from './UserTime.module.scss'
import classNames from 'classnames'

interface UserTimeProps {
  className?: string
}

export const UserTime = (props: UserTimeProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.UserTime, {}, [className])}>
      <div className={styles.UserTime__data}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Clock />
          </div>
          <Text size={16} text='На часах у нас' />
        </div>
        <Text className={styles.data} size={32} weight='medium' text='3:46' />
      </div>
      <div className={styles.UserTime__data}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Calendar />
          </div>
          <Text size={16} text='На календаре у нас' />
        </div>
        <Text className={styles.data} size={32} weight='medium' text='05.10.2021' />
      </div>
    </div>
  )
}
