import { memo } from 'react'
import { Chat, ChatContent, ChatEmpty, ChatFooter, ChatHeader } from 'entities/Chat'
import classNames from 'classnames'
import './ChatMessenger.scss'

interface ChatMessengerProps {
  chat: Chat | null

  handleSetMenu?: () => void
  className?: string
}

export const ChatMessenger = memo((props: ChatMessengerProps) => {
  const { className, chat, handleSetMenu } = props

  return (
    <div className={classNames('chat-messenger', {}, [className])}>
      {chat ? (
        <div className='chat-messenger__container'>
          <ChatHeader handleSetMenu={handleSetMenu} title={chat.title} />
          <ChatContent messages={chat.messages} />
          <ChatFooter />
        </div>
      ) : (
        <ChatEmpty />
      )}
    </div>
  )
})
