import { memo } from 'react'
import { ChatButtonEdit, ChatList, ChatSearch, Chat } from 'entities/Chat'
import classNames from 'classnames'
import styles from './ChatMenu.module.scss'

interface ChatMenuProps {
  chats: Chat[]
  isLoading?: boolean
  chatId: number
  handleSetChatId: (chatId: number) => () => void
  className?: string
}

export const ChatMenu = memo((props: ChatMenuProps) => {
  const { className, chatId, handleSetChatId, chats, isLoading } = props

  return (
    <div className={classNames(styles.ChatMenu, {}, [className])}>
      <div className={styles.ChatMenu__header}>
        <ChatSearch />
        <ChatButtonEdit />
      </div>
      <ChatList
        chats={chats}
        chatId={chatId}
        isLoading={isLoading}
        handleSetChatId={handleSetChatId}
      />
    </div>
  )
})
