import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Comment from 'shared/assets/icons/comment.svg'
import Heart from 'shared/assets/icons/heart.svg'
import { Article } from '../../model/types/Article'
import classNames from 'classnames'
import styles from './ArticleContent.module.scss'

interface ArticleContentProps {
  article: Article
  className?: string
}

export const ArticleContent = memo((props: ArticleContentProps) => {
  const { className, article } = props
  return (
    <div className={classNames(styles.ArticleContent, {}, [className])}>
      <div className={styles.ArticleContent__text}>
        <Text text={article?.body} />
      </div>
      <div className={styles.ArticleContent__images}></div>
      <div className={styles.ArticleContent__stats}>
        <div className={styles.stat}>
          <Heart />
          <Text text='324' />
        </div>
        <div className={styles.stat}>
          <Comment />
          <Text text='324' />
        </div>
      </div>
      <div className={styles.ArticleContent__divider} />
    </div>
  )
})
