import { memo, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetChatsQuery } from 'entities/Chat'
import { getRouteChat } from 'shared/const/router'
import { Skeleton } from 'shared/ui/Skeleton'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import classNames from 'classnames'
import './ChatRecommendationList.scss'

interface ChatRecommendationListProps {
  className?: string
}

const getSkeletons = () =>
  new Array(6)
    .fill(0)
    .map((item, index) => <Skeleton border='50%' width='60px' height='60px' key={index} />)

export const ChatRecommendationList = memo((props: ChatRecommendationListProps) => {
  const { className } = props
  const navigate = useNavigate()
  const { width } = useWindowDimensions()
  const { data: chats, isLoading } = useGetChatsQuery()
  const handleClickToChat = () => {
    navigate(getRouteChat())
  }

  const countUsers = useMemo(() => (width > 1680 ? 5 : 3), [width])

  return (
    <div className={classNames('chat-recommendation-list', {}, [className])}>
      <div className='chat-recommendation-list__users'>
        {chats && (
          <>
            {chats.slice(0, countUsers).map((chat) => (
              <Avatar
                key={chat.id}
                size={60}
                src={chat.users[0].avatar}
                alt={chat.users[0].username}
              />
            ))}
            <div className='chat-recommendation-list__icon'>
              <Text align='center' text='+' />
            </div>
          </>
        )}
        {isLoading && getSkeletons()}
      </div>
      <Button onClick={handleClickToChat}>Напиши сейчас</Button>
    </div>
  )
})
