import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetChatsQuery } from 'entities/Chat'
import { getRouteChat } from 'shared/const/router'
import { Skeleton } from 'shared/ui/Skeleton'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import classNames from 'classnames'
import styles from './ChatRecommendationList.module.scss'

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
  const { data: users, isLoading } = useGetChatsQuery()
  const handleClickToChat = () => {
    navigate(getRouteChat())
  }

  return (
    <div className={classNames(styles.ChatRecommendationList, {}, [className])}>
      <div className={styles.ChatRecommendationList__users}>
        {users && (
          <>
            {users.map((user) => (
              <Avatar size={60} key={user.id} src={user.avatar} alt={user.username} />
            ))}
            <div className={styles.ChatRecommendationList__icon}>
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
