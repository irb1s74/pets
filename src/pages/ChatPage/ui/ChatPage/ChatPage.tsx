import { ChatMenu } from 'feature/ChatMenu'
import { ChatMessages } from 'feature/ChatMessages'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatPage, {}, [className])}>
      <ChatMenu className={styles.ChatPage__menu} />
      <ChatMessages />
    </div>
  )
}
export default ChatPage
