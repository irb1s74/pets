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
    ['ChatListItem-active']: active,
  }

  return (
    <div className={classNames('ChatListItem', mods, [className])} onClick={onClick(chat.id)}>
      <Avatar className='ChatListItem__avatar' src={chat?.avatar} alt={chat?.title} size={48} />
      <div className='ChatListItem__text'>
        <Text size={16} weight='bold' text={chat?.title} />
        <Text color='gray' size={14} text={chat?.lastMessage} />
      </div>
      <div className='ChatListItem__time'>
        <Text size={14} color='gray' text={chat?.date} />
      </div>
    </div>
  )
})
