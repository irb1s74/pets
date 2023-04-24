import { memo } from 'react'
import { Chat } from 'entities/Chat'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Switch } from 'shared/ui/Switch'
import classNames from 'classnames'
import './ChatEditListItem.scss'

interface ChatEditListItemProps {
  chat: Chat
  className?: string
}

export const ChatEditListItem = memo((props: ChatEditListItemProps) => {
  const { className, chat } = props
  return (
    <div className={classNames('chat-edit-list-item', {}, [className])}>
      <Avatar
        className='chat-edit-list-item__avatar'
        src={chat.avatar}
        alt={chat.title}
        size={32}
      />
      <Text className='chat-edit-list-item__name' size={18} text={chat.title} />
      <div className='chat-edit-list-item__switch'>
        <Switch />
      </div>
    </div>
  )
})
