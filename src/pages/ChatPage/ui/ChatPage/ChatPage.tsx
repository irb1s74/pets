import { ChatMenu } from 'feature/ChatMenu'
import classNames from 'classnames'
import styles from './ChatPage.module.scss'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatPage, {}, [className])}>
      <ChatMenu />
      <div className={styles.ChatPage__chat}></div>
    </div>
  )
}
export default ChatPage
