import { memo } from 'react'
import { Article } from '../../model/types/Article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import classNames from 'classnames'
import styles from './ArticleList.module.scss'
interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => <ArticleListItemSkeleton key={index} />)

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading } = props
  return (
    <div className={classNames(styles.ArticleList, {}, [className])}>
      {articles?.map((item) => (
        <ArticleListItem key={item.id} data={item} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})
