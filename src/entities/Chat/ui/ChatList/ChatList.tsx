import { memo } from 'react'
import { Chat } from '../../model/types/Chat'
import { ChatListItem } from '../../ui/ChatListItem/ChatListItem'
import { ChatListItemSkeleton } from '../../ui/ChatListItem/ChatListItemSkeleton'
import classNames from 'classnames'
import './ChatList.scss'

interface ChatListProps {
  chats: Chat[]
  chatId: number
  handleSetChatId: (chatId: number) => () => void
  isLoading?: boolean
  className?: string
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => <ChatListItemSkeleton key={index} />)

export const ChatList = memo((props: ChatListProps) => {
  const { className, chats, isLoading, chatId, handleSetChatId } = props
  return (
    <div className={classNames('chat-list', {}, [className])}>
      {chats?.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          onClick={handleSetChatId}
          active={chatId === chat.id}
        />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})
