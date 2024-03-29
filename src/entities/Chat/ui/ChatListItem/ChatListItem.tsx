import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Chat } from '../../model/types/Chat'
import classNames from 'classnames'
import './ChatListItem.scss'

interface ChatListItemProps {
  chat: Chat
  onClick: (chatId: number) => () => void
  active?: boolean
  className?: string
}

export const ChatListItem = memo((props: ChatListItemProps) => {
  const { className, chat, active, onClick } = props

  const mods = {
    ['chat-list-item_active']: active,
  }

  return (
    <div className={classNames('chat-list-item', mods, [className])} onClick={onClick(chat.id)}>
      <Avatar className='chat-list-item__avatar' src={chat?.avatar} alt={chat?.title} size={48} />
      <div className='chat-list-item__text'>
        <Text size={16} weight='bold' text={chat?.title} />
        <Text color='gray' size={14} text={chat?.lastMessage} />
      </div>
      <div className='chat-list-item__time'>
        <Text size={14} color='gray' text={chat?.date} />
      </div>
    </div>
  )
})
