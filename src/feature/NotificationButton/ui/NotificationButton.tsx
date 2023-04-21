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
    <div className={classNames('NotificationButton', {}, [className])}>
      <Alert className='NotificationButton__icon' />
      <span className='NotificationButton__span' />
    </div>
  )
})
