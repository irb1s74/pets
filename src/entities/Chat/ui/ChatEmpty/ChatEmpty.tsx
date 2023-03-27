import classNames from 'classnames'
import styles from './ChatEmpty.module.scss'
import Chats from 'shared/assets/icons/chats.svg'
import { Text } from 'shared/ui/Text'
import { memo } from 'react'

interface ChatEmptyProps {
  className?: string
}

export const ChatEmpty = memo((props: ChatEmptyProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatEmpty, {}, [className])}>
      <div className={styles.icon}>
        <Chats />
      </div>
      <div className={styles.text}>
        <Text align='center' size={18} text='Выберите чат или' />
        <Text weight='bold' align='center' size={18} text='создайте новую беседу' />
      </div>
    </div>
  )
})
