import { memo, ReactNode } from 'react'
import { Skeleton } from 'shared/ui/Skeleton'
import classNames from 'classnames'
import styles from './ArticleGrid.module.scss'

interface ArticleGridProps {
  className?: string
  children: ReactNode
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(4)
    .fill(0)
    .map((item, index) => <Skeleton key={index} border='16px' width='560px' height='280px' />)
export const ArticleGrid = memo((props: ArticleGridProps) => {
  const { className, isLoading, children } = props
  return (
    <div className={classNames(styles.ArticleGrid, {}, [className])}>
      {children}
      {isLoading && getSkeletons()}
    </div>
  )
})
