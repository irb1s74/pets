import { memo } from 'react'
import dayjs from 'dayjs'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import styles from './ArticleHeader.module.scss'
import 'dayjs/locale/ru'

interface ArticleHeaderProps {
  article: Article
  className?: string
}

export const ArticleHeader = memo((props: ArticleHeaderProps) => {
  const { className, article } = props
  return (
    <div className={classNames(styles.ArticleHeader, {}, [className])}>
      <div className={styles.ArticleHeader__author}>
        <Avatar className={styles.avatar} size={48} src={article?.avatar} alt={article.author} />
        <div className={styles.name}>
          <Text size={16} weight='bold' text={article?.author} />
          <Text size={14} color='gray' text={article?.status} />
        </div>
      </div>
      <div className={styles.ArticleHeader__dates}>
        <Text size={14} color='gray' text={dayjs(article.time).locale('ru').format('DD MMMM')} />
        <Text size={14} color='gray' text={dayjs(article.time).format('HH:mm')} />
      </div>
    </div>
  )
})
