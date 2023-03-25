import { memo } from 'react'
import { ChatButtonEdit, ChatList, ChatSearch, useGetChatsQuery } from 'entities/Chat'
import classNames from 'classnames'
import styles from './ChatMenu.module.scss'

interface ChatMenuProps {
  className?: string
}

export const ChatMenu = memo((props: ChatMenuProps) => {
  const { className } = props

  const { data, isLoading } = useGetChatsQuery()
  return (
    <div className={classNames(styles.ChatMenu, {}, [className])}>
      <div className={styles.ChatMenu__header}>
        <ChatSearch />
        <ChatButtonEdit />
      </div>
      <ChatList chats={data} isLoading={isLoading} />
    </div>
  )
})
