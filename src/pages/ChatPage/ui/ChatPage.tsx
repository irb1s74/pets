import classNames from 'classnames'
import styles from './ChatPage.module.scss'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  return <div className={classNames(styles.ChatPage, {}, [className])}></div>
}
export default ChatPage
