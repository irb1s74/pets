import { memo } from 'react'
import { Message } from 'entities/Chat'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import styles from './ChatContent.module.scss'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import dayjs from 'dayjs'

interface ChatContentProps {
  messages?: Message[]
  className?: string
}

export const ChatContent = memo((props: ChatContentProps) => {
  const { className, messages } = props
  const user = useSelector(getUserAuthData)

  return (
    <div className={classNames(styles.ChatContent, {}, [className])}>
      {messages &&
        messages.map((message) => (
          <div
            key={message.id}
            className={classNames(
              styles.ChatContent__message,
              { [styles.ChatContent__messageFromUser]: message.author.id === user.id },
              [],
            )}
          >
            <div className={styles.content}>
              <Text className={styles.content__text} size={14} text={message.content} />
              <Text
                className={styles.content__time}
                color='gray'
                size={10}
                text={dayjs(message.date).format('hh:mm')}
              />
            </div>
          </div>
        ))}
    </div>
  )
})
