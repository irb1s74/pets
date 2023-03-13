import { memo } from 'react'
import Alert from 'shared/assets/icons/alert.svg'
import classNames from 'classnames'
import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  return (
    <div className={classNames(styles.NotificationButton, {}, [className])}>
      <Alert className={styles.NotificationButton__icon} />
      <span className={styles.NotificationButton__span} />
    </div>
  )
})
