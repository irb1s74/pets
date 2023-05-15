import { ChangeEvent, memo, useCallback, useState } from 'react'
import {
  ChatButtonEdit,
  ChatList,
  ChatSearch,
  Chat,
  ChatEditList,
  useLazyFindUsersQuery,
  useCreateDialogMutation,
} from 'entities/Chat'
import { UserList } from 'entities/User'
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
  const [create] = useCreateDialogMutation()
  const [isEditable, setEditable] = useState(false)
  const [isSearching, setSearching] = useState(false)
  const [search, { isLoading: isLoadingUsers, data: users }] = useLazyFindUsersQuery()

  const handleSetEditable = useCallback(() => setEditable((prevState) => !prevState), [])

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearching(false)
    } else {
      setSearching(true)
    }
    search(e.target.value)
  }, [])

  const handleCreateDialog = useCallback(
    (userId: number) => () => {
      create(userId)
      setSearching(false)
    },
    [],
  )

  return (
    <div className={classNames('chat-menu', {}, [className])}>
      <div className='chat-menu__header'>
        <ChatSearch onChange={handleOnChange} />
        <ChatButtonEdit active={isEditable} onClick={handleSetEditable} />
      </div>
      {isEditable ? (
        <ChatEditList chats={chats} />
      ) : (
        <>
          {users?.length > 0 && isSearching && (
            <UserList
              className='chat-menu__list'
              users={users}
              isLoading={isLoadingUsers}
              handleSelect={handleCreateDialog}
            />
          )}
          <ChatList
            className='chat-menu__list'
            chats={chats}
            chatId={chatId}
            isLoading={isLoading}
            handleSetChatId={handleSetChatId}
          />
        </>
      )}
    </div>
  )
})
