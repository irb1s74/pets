import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Text } from 'shared/ui/Text'
import Clock from 'shared/assets/icons/clock.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import classNames from 'classnames'
import './UserTime.scss'

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
    <div className={classNames('user-time', {}, [className])}>
      <div className='user-time__block'>
        <div className='user-time__header'>
          <div className='user-time__icon'>
            <Clock />
          </div>
          <Text size={16} text='На часах у нас' />
        </div>
        <Text className='user-time__text' size={32} weight='medium' text={dateTime.time} />
      </div>
      <div className='user-time__block'>
        <div className='user-time__header'>
          <div className='user-time__icon'>
            <Calendar />
          </div>
          <Text size={16} text='На календаре у нас' />
        </div>
        <Text className='user-time__text' size={32} weight='medium' text={dateTime.date} />
      </div>
    </div>
  )
}
