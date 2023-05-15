import { useCallback, useMemo, useState } from 'react'
import { ChatMenu } from 'feature/ChatMenu'
import { ChatMessenger } from 'feature/ChatMessenger'
import { useGetChatsQuery } from 'entities/Chat'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import classNames from 'classnames'
import './ChatPage.scss'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  const [chatId, setChatId] = useState(null)
  const [slideMobile, setSlideMobile] = useState(0)
  const { data, isLoading } = useGetChatsQuery()

  const { width } = useWindowDimensions()

  const handleSetChatId = useCallback(
    (chatId: number) => () => {
      setChatId(chatId)
      setSlideMobile(1)
    },
    [],
  )

  const handleSetMenu = useCallback(() => setSlideMobile(0), [])

  const selectedChat = useMemo(() => data?.find((chat) => chat.id === chatId), [chatId, data])

  if (width <= 1180) {
    return (
      <div className={classNames('chat-page', {}, [className])}>
        {slideMobile ? (
          <ChatMessenger handleSetMenu={handleSetMenu} chat={selectedChat} />
        ) : (
          <ChatMenu
            chats={data}
            chatId={chatId}
            isLoading={isLoading}
            handleSetChatId={handleSetChatId}
            className='chat-page__menu'
          />
        )}
      </div>
    )
  }

  return (
    <div className={classNames('chat-page', {}, [className])}>
      <ChatMenu
        chats={data}
        chatId={chatId}
        isLoading={isLoading}
        handleSetChatId={handleSetChatId}
        className='chat-page__menu'
      />
      <ChatMessenger className='chat-page__messenger' chat={selectedChat} />
    </div>
  )
}
export default ChatPage
