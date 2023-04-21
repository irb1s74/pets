import { memo } from 'react'
import { Chat } from '../../model/types/Chat'
import { ChatEditListItem } from '../ChatEditListItem/ChatEditListItem'
import classNames from 'classnames'
import './ChatEditList.scss'

interface ChatEditListProps {
  chats: Chat[]
  className?: string
}

export const ChatEditList = memo((props: ChatEditListProps) => {
  const { className, chats } = props
  return (
    <div className={classNames('ChatEditList', {}, [className])}>
      {chats?.map((chat) => (
        <ChatEditListItem key={chat.id} chat={chat} />
      ))}
    </div>
  )
})
