import classNames from 'classnames'
import { Skeleton } from 'shared/ui/Skeleton'
import { memo } from 'react'

interface PetListItemSkeletonProps {
  className?: string
}

export const PetListItemSkeleton = memo((props: PetListItemSkeletonProps) => {
  const { className } = props
  return <Skeleton className={classNames([className])} border='16px' height={290} />
})
