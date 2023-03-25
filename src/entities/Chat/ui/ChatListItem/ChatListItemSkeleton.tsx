import { memo } from 'react'
import { Skeleton } from 'shared/ui/Skeleton'
import classNames from 'classnames'

interface ChatListItemSkeletonProps {
  className?: string
}

export const ChatListItemSkeleton = memo((props: ChatListItemSkeletonProps) => {
  const { className } = props
  return <Skeleton className={classNames([className])} border='16px' width='100%' height='88px' />
})
