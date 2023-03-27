import { useCallback, useMemo, useState } from 'react'
import { ChatMenu } from 'feature/ChatMenu'
import { ChatMessenger } from 'feature/ChatMessenger'
import { useGetChatsQuery } from 'entities/Chat'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  const [chatId, setChatId] = useState(null)
  const { data, isLoading } = useGetChatsQuery()

  const handleSetChatId = useCallback(
    (chatId: number) => () => {
      setChatId(chatId)
    },
    [],
  )

  const selectedChat = useMemo(() => data?.find((chat) => chat.id === chatId), [chatId, data])

  return (
    <div className={classNames(styles.ChatPage, {}, [className])}>
      <ChatMenu
        chats={data}
        chatId={chatId}
        isLoading={isLoading}
        handleSetChatId={handleSetChatId}
        className={styles.ChatPage__menu}
      />
      <ChatMessenger chat={selectedChat} />
    </div>
  )
}
export default ChatPage
