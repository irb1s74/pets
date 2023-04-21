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
    <div className={classNames('ChatEditListItem', {}, [className])}>
      <Avatar className='ChatEditListItem__avatar' src={chat.avatar} alt={chat.title} size={32} />
      <Text className='ChatEditListItem__name' size={18} text={chat.title} />
      <div className='ChatEditListItem__switch'>
        <Switch />
      </div>
    </div>
  )
})
