import classNames from 'classnames'
import styles from './UserProgress.module.scss'
import { memo } from 'react'

interface UserProgressProps {
  className?: string
}

export const UserProgress = memo((props: UserProgressProps) => {
  const { className } = props
  return <div className={classNames(styles.UserProgress, {}, [className])}></div>
})
