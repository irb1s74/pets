import classNames from 'classnames'
import styles from './CreateArticle.module.scss'
import { memo } from 'react'

interface CreateArticleProps {
  className?: string
}

export const CreateArticle = memo((props: CreateArticleProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.CreateArticle, {}, [className])}>
    </div>
  )
})
