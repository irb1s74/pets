import classNames from 'classnames'
import styles from './ChatEditListItem.module.scss'
import { Chat } from 'entities/Chat'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Switch } from 'shared/ui/Switch'
import { memo } from 'react'

interface ChatEditListItemProps {
  chat: Chat
  className?: string
}

export const ChatEditListItem = memo((props: ChatEditListItemProps) => {
  const { className, chat } = props
  return (
    <div className={classNames(styles.ChatEditListItem, {}, [className])}>
      <Avatar
        className={styles.ChatEditListItem__avatar}
        src={chat.avatar}
        alt={chat.title}
        size={32}
      />
      <Text className={styles.ChatEditListItem__name} size={18} text={chat.title} />
      <div className={styles.ChatEditListItem__switch}>
        <Switch />
      </div>
    </div>
  )
})
