import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Chat } from '../../model/types/Chat'
import classNames from 'classnames'
import styles from './ChatListItem.module.scss'

interface ChatListItemProps {
  chat: Chat
  className?: string
}

export const ChatListItem = memo((props: ChatListItemProps) => {
  const { className, chat } = props
  return (
    <div className={classNames(styles.ChatListItem, {}, [className])}>
      <Avatar
        className={styles.ChatListItem__avatar}
        src={chat?.avatar}
        alt={chat?.title}
        size={48}
      />
      <div className={styles.ChatListItem__text}>
        <Text size={16} weight='bold' text={chat?.title} />
        <Text color='gray' size={14} text={chat?.lastMessage} />
      </div>
      <div className={styles.ChatListItem__time}>
        <Text size={14} color='gray' text={chat.date} />
      </div>
    </div>
  )
})
