import { memo } from 'react'
import dayjs from 'dayjs'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import 'dayjs/locale/ru'
import './ArticleHeader.scss'

interface ArticleHeaderProps {
  article: Article
  className?: string
}

export const ArticleHeader = memo((props: ArticleHeaderProps) => {
  const { className, article } = props
  return (
    <div className={classNames('article-header', {}, [className])}>
      <div className='article-header__author'>
        <Avatar
          className='article-header__avatar'
          size={48}
          src={`${article.author.avatar}`}
          alt={article.author.username}
        />
        <div className='article-header__name'>
          <Text size={16} weight='bold' text={article.author.username} />
          <Text size={14} color='gray' text={article.author.status} />
        </div>
      </div>
      <div className='article-header__dates'>
        <Text
          size={14}
          color='gray'
          text={dayjs(article.createdAt).locale('ru').format('DD MMMM')}
        />
        <Text size={14} color='gray' text={dayjs(article.createdAt).format('HH:mm')} />
      </div>
    </div>
  )
})
