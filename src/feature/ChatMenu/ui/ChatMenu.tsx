import { memo, useCallback, useState } from 'react'
import { ChatButtonEdit, ChatList, ChatSearch, Chat, ChatEditList } from 'entities/Chat'
import classNames from 'classnames'
import './ChatMenu.scss'

interface ChatMenuProps {
  chats: Chat[]
  isLoading?: boolean
  chatId: number
  handleSetChatId: (chatId: number) => () => void
  className?: string
}

export const ChatMenu = memo((props: ChatMenuProps) => {
  const { className, chatId, handleSetChatId, chats, isLoading } = props
  const [isEditable, setEditable] = useState(false)

  const handleSetEditable = useCallback(() => setEditable((prevState) => !prevState), [])

  return (
    <div className={classNames('ChatMenu', {}, [className])}>
      <div className='ChatMenu__header'>
        <ChatSearch />
        <ChatButtonEdit active={isEditable} onClick={handleSetEditable} />
      </div>
      {isEditable ? (
        <ChatEditList chats={chats} />
      ) : (
        <ChatList
          chats={chats}
          chatId={chatId}
          isLoading={isLoading}
          handleSetChatId={handleSetChatId}
        />
      )}
    </div>
  )
})
