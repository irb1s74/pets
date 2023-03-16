import { Text } from 'shared/ui/Text'
import Clock from 'shared/assets/icons/clock.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import styles from './UserTime.module.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

interface UserTimeProps {
  className?: string
}

export const UserTime = (props: UserTimeProps) => {
  const { className } = props
  const [dateTime, setDateTime] = useState({
    time: dayjs().format('h:mm'),
    date: dayjs().format('DD.MM.YYYY'),
  })

  useEffect(() => {
    setInterval(
      () =>
        setDateTime({
          time: dayjs().format('h:mm'),
          date: dayjs().format('DD.MM.YYYY'),
        }),
      60000,
    )
  }, [])

  return (
    <div className={classNames(styles.UserTime, {}, [className])}>
      <div className={styles.UserTime__data}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Clock />
          </div>
          <Text size={16} text='На часах у нас' />
        </div>
        <Text className={styles.data} size={32} weight='medium' text={dateTime.time} />
      </div>
      <div className={styles.UserTime__data}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <Calendar />
          </div>
          <Text size={16} text='На календаре у нас' />
        </div>
        <Text className={styles.data} size={32} weight='medium' text={dateTime.date} />
      </div>
    </div>
  )
}
