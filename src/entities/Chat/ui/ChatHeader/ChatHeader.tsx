import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Trash from 'shared/assets/icons/trash.svg'
import classNames from 'classnames'
import styles from './ChatHeader.module.scss'

interface ChatHeaderProps {
  title: string
  className?: string
}

export const ChatHeader = memo((props: ChatHeaderProps) => {
  const { className, title } = props
  return (
    <div className={classNames(styles.ChatHeader, {}, [className])}>
      <Text weight='bold' size={16} text={title} className={styles.title} />
      <div className={styles.ChatHeader__iconBtn}>
        <Trash />
      </div>
    </div>
  )
})
