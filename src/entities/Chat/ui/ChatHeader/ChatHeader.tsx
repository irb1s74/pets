import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Arrow from 'shared/assets/icons/leftArrow.svg'
import Trash from 'shared/assets/icons/trash.svg'
import classNames from 'classnames'
import styles from './ChatHeader.module.scss'

interface ChatHeaderProps {
  title: string
  handleSetMenu?: () => void
  className?: string
}

export const ChatHeader = memo((props: ChatHeaderProps) => {
  const { className, title, handleSetMenu } = props
  return (
    <div className={classNames(styles.ChatHeader, {}, [className])}>
      <div className={styles.title}>
        <div onClick={handleSetMenu} className={styles.title__arrow}>
          <Arrow />
        </div>
        <Text weight='bold' size={16} text={title} className={styles.title__text} />
      </div>
      <div className={styles.ChatHeader__iconBtn}>
        <Trash />
      </div>
    </div>
  )
})
