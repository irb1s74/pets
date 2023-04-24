import { memo } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { Message } from 'entities/Chat'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './ChatContent.scss'

interface ChatContentProps {
  messages?: Message[]
  className?: string
}

export const ChatContent = memo((props: ChatContentProps) => {
  const { className, messages } = props
  const user = useSelector(getUserAuthData)

  return (
    <div className={classNames('chat-content', {}, [className])}>
      {messages &&
        messages.map((message) => (
          <div
            key={message.id}
            className={classNames(
              'chat-content__message',
              { ['chat-content__message_from-user']: message.author.id === user.id },
              [],
            )}
          >
            <div className='chat-content__content'>
              <Text className='chat-content__text' size={14} text={message.content} />
              <Text color='gray' size={10} text={dayjs(message.date).format('hh:mm')} />
            </div>
          </div>
        ))}
    </div>
  )
})
