import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { User } from '../../model/types/user'
import classNames from 'classnames'
import './UserListItem.scss'

interface ChatListItemProps {
  user: User
  onClick: (userId: number) => () => void
  active?: boolean
  className?: string
}

export const UserListItem = memo((props: ChatListItemProps) => {
  const { className, user, active, onClick } = props

  const mods = {
    ['user-list-item_active']: active,
  }

  return (
    <div className={classNames('user-list-item', mods, [className])} onClick={onClick(user.id)}>
      <Avatar
        className='user-list-item__avatar'
        src={user?.avatar}
        alt={user?.username}
        size={48}
      />
      <div className='user-list-item__text'>
        <Text size={16} weight='bold' text={user?.username} />
      </div>
    </div>
  )
})
