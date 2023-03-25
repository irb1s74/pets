import { memo } from 'react'
import { Chat } from '../../model/types/Chat'
import { ChatListItem } from '../../ui/ChatListItem/ChatListItem'
import { ChatListItemSkeleton } from '../../ui/ChatListItem/ChatListItemSkeleton'
import classNames from 'classnames'
import styles from './ChatList.module.scss'

interface ChatListProps {
  chats: Chat[]
  isLoading?: boolean
  className?: string
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => <ChatListItemSkeleton key={index} />)

export const ChatList = memo((props: ChatListProps) => {
  const { className, chats, isLoading } = props
  return (
    <div className={classNames(styles.ChatList, {}, [className])}>
      {chats?.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})
