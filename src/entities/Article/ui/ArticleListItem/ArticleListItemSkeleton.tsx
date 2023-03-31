import { memo } from 'react'
import { Skeleton } from 'shared/ui/Skeleton'
import classNames from 'classnames'

interface ArticleListItemProps {
  className?: string
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemProps) => {
  const { className } = props
  return (
    <Skeleton className={classNames([className])} border='16px' width='325px' height={'100%'} />
  )
})
