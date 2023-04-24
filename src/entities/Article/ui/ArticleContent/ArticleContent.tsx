import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Comment from 'shared/assets/icons/comment.svg'
import Heart from 'shared/assets/icons/heart.svg'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import './ArticleContent.scss'

interface ArticleContentProps {
  article: Article
  className?: string
}

export const ArticleContent = memo((props: ArticleContentProps) => {
  const { className, article } = props
  const isHaveImages = article.images && article.images.length

  return (
    <div className={classNames('article-content', {}, [className])}>
      <div className='article-content__text'>
        <Text text={article?.body} />
      </div>
      {isHaveImages && (
        <div className='article-content__images'>
          {article.images.map((img, index) => (
            <div key={index}>
              <AppImage
                src={img}
                fallback={<Skeleton border='13px' width='100%' height='100%' />}
              />
            </div>
          ))}
        </div>
      )}
      <div className='article-content__stats'>
        <div className='article-content__stat'>
          <Heart />
          <Text text='324' />
        </div>
        <div className='article-content__stat'>
          <Comment />
          <Text text='324' />
        </div>
      </div>
      <div className='article-content__divider' />
    </div>
  )
})
