import { memo } from 'react'
import { Chat, ChatEmpty, ChatFooter, ChatHeader } from 'entities/Chat'
import classNames from 'classnames'
import styles from './ChatMessenger.module.scss'

interface ChatMessengerProps {
  chat: Chat | null
  className?: string
}

export const ChatMessenger = memo((props: ChatMessengerProps) => {
  const { className, chat } = props

  return (
    <div className={classNames(styles.ChatMessenger, {}, [className])}>
      {chat ? (
        <div className={styles.ChatMessenger__container}>
          <ChatHeader title={chat.title} />
          <ChatFooter />
        </div>
      ) : (
        <ChatEmpty />
      )}
    </div>
  )
})
