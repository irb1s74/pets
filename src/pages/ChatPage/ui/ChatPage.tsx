import classNames from 'classnames'
import styles from './ChatPage.module.scss'
import { Page } from 'widget/Page'

interface ChatPageProps {
  className?: string
}

const ChatPage = (props: ChatPageProps) => {
  const { className } = props
  return (
    <Page title='Чат'>
      <div className={classNames(styles.ChatPage, {}, [className])}></div>
    </Page>
  )
}
export default ChatPage
