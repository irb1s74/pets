import { memo } from 'react'
import { User } from '../../model/types/user'
import { UserListItem } from '../../ui/UserListItem/UserListItem'
import { UserListItemSkeleton } from '../UserListItem/UserListItemSkeleton'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './UserList.scss'

interface UserListProps {
  users: User[]
  handleSelect: (userId: number) => () => void
  isLoading?: boolean
  className?: string
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => <UserListItemSkeleton key={index} />)

export const UserList = memo((props: UserListProps) => {
  const { className, users, isLoading, handleSelect } = props

  return (
    <div className={classNames('user-list', {}, [className])}>
      {users?.map((user) => (
        <UserListItem key={user.id} user={user} onClick={handleSelect} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})
