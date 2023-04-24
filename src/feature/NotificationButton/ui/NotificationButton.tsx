import { memo } from 'react'
import Alert from 'shared/assets/icons/alert.svg'
import classNames from 'classnames'
import './NotificationButton.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  return (
    <div className={classNames('notification-button', {}, [className])}>
      <Alert className='notification-button__icon' />
      <span className='notification-button__span' />
    </div>
  )
})
