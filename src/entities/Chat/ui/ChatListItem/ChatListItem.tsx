import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Chat } from '../../model/types/Chat'
import classNames from 'classnames'
import './ChatListItem.scss'
import dayjs from 'dayjs'

interface ChatListItemProps {
  data: Chat
  onClick: (chatId: number) => () => void
  active?: boolean
  className?: string
}

export const ChatListItem = memo((props: ChatListItemProps) => {
  const { className, data, active, onClick } = props

  const mods = {
    ['chat-list-item_active']: active,
  }

  return (
    <div className={classNames('chat-list-item', mods, [className])} onClick={onClick(data.id)}>
      <Avatar
        className='chat-list-item__avatar'
        src={data?.users[0].avatar}
        alt={data?.users[0].username}
        size={48}
      />
      <div className='chat-list-item__text'>
        <Text size={16} weight='bold' text={data.users[0].username} />
      </div>
      <div className='chat-list-item__time'>
        <Text size={14} color='gray' text={dayjs(data?.createdAt).format('hh:mm')} />
      </div>
    </div>
  )
})
