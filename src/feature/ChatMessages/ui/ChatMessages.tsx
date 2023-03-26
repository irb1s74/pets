import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Chats from 'shared/assets/icons/chats.svg'
import classNames from 'classnames'
import styles from './ChatMessages.module.scss'

interface ChatMessagesProps {
  className?: string
}

export const ChatMessages = memo((props: ChatMessagesProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatMessages, {}, [className])}>
      <div className={styles.ChatMessages__emptyContent}>
        <div className={styles.icon}>
          <Chats />
        </div>
        <div className={styles.text}>
          <Text align='center' size={18} text='Выберите чат или' />
          <Text weight='bold' align='center' size={18} text='создайте новую беседу' />
        </div>
      </div>
    </div>
  )
})
