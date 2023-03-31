import { memo } from 'react'
import { Chat, ChatContent, ChatEmpty, ChatFooter, ChatHeader } from 'entities/Chat'
import classNames from 'classnames'
import styles from './ChatMessenger.module.scss'

interface ChatMessengerProps {
  chat: Chat | null

  handleSetMenu?: () => void
  className?: string
}

export const ChatMessenger = memo((props: ChatMessengerProps) => {
  const { className, chat, handleSetMenu } = props

  return (
    <div className={classNames(styles.ChatMessenger, {}, [className])}>
      {chat ? (
        <div className={styles.ChatMessenger__container}>
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
