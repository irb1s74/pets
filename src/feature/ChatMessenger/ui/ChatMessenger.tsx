import { memo, useEffect, useState, KeyboardEvent, ChangeEvent } from 'react'
import { Chat, ChatContent, ChatEmpty, ChatFooter, ChatHeader, Message } from 'entities/Chat'
import classNames from 'classnames'
import './ChatMessenger.scss'
import { io } from 'socket.io-client'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface ChatMessengerProps {
  chat: Chat | null

  handleSetMenu?: () => void
  className?: string
}

export const ChatMessenger = memo((props: ChatMessengerProps) => {
  const { className, chat, handleSetMenu } = props
  const user = useSelector(getUserAuthData)
  const [messages, setMessages] = useState<Message[]>([])
  const socket = io(`${__API__}chats`)

  useEffect(() => {
    if (chat?.id) {
      socket.emit('joinRoom', { userId: user.id, dialogId: chat?.id })
    }
    socket.on('newMessages', (data: { messages: Message[] }) => {
      setMessages(data.messages)
    })

    return () => {
      socket.disconnect()
    }
  }, [chat?.id])

  const [text, setText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text) {
      event.preventDefault()
      socket.emit('sendMessage', { dialogId: chat?.id, userId: user.id, content: text })
      setText('')
    }
  }

  const handleOnClick = () => {
    if (text) {
      socket.emit('sendMessage', { dialogId: chat?.id, userId: user.id, content: text })
      setText('')
    }
  }

  return (
    <div className={classNames('chat-messenger', {}, [className])}>
      {chat ? (
        <div className='chat-messenger__container'>
          <ChatHeader handleSetMenu={handleSetMenu} title={chat.users[0].username} />
          <ChatContent messages={messages} />
          <ChatFooter onChange={handleChange} onClick={handleOnClick} onKeyUp={handleKeyDown} />
        </div>
      ) : (
        <ChatEmpty className='chat-messenger__empty' />
      )}
    </div>
  )
})
