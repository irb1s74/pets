import { memo } from 'react'
import dayjs from 'dayjs'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  data: Article
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, data } = props

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className])}>
      <div className={styles.ArticleListItem__header}>
        <Avatar src={data.avatar} alt={data.author} size={48} />
        <div className={styles.title}>
          <Text weight='bold' size={16} text={data.author} />
          <Text className={styles.status} size={14} text={data.status} />
        </div>
        <Text className={styles.time} text={dayjs(data.time).format('HH:mm')} />
      </div>
      <div className={styles.ArticleListItem__content}>
        <Text size={14} text={data.body} />
      </div>
    </div>
  )
})
