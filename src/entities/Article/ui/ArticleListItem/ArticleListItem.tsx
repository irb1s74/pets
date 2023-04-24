import { memo } from 'react'
import dayjs from 'dayjs'
import { Avatar } from 'shared/ui/Avatar'
import { Text } from 'shared/ui/Text'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import './ArticleListItem.scss'

interface ArticleListItemProps {
  className?: string
  data: Article
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, data } = props

  return (
    <div className={classNames('article-list-item', {}, [className])}>
      <div className='article-list-item__header'>
        <Avatar src={data.avatar} alt={data.author} size={48} />
        <div className='article-list-item__title'>
          <Text weight='bold' size={16} text={data.author} />
          <Text className='article-list-item__status' size={14} text={data.status} />
        </div>
        <Text className='article-list-item__time' text={dayjs(data.time).format(' HH:mm')} />
      </div>
      <div className='article-list-item__content'>
        <Text size={14} text={data.body} />
      </div>
    </div>
  )
})
