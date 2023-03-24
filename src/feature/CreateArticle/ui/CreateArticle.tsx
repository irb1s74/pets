import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import Photo from 'shared/assets/icons/photo.svg'
import classNames from 'classnames'
import styles from './CreateArticle.module.scss'

interface CreateArticleProps {
  className?: string
}

export const CreateArticle = memo((props: CreateArticleProps) => {
  const { className } = props
  const user = useSelector(getUserAuthData)
  return (
    <div className={classNames(styles.CreateArticle, {}, [className])}>
      <Avatar src={user.avatar} alt={user.username} size={32} />
      <div className={styles.CreateArticle__content}>
        <textarea placeholder='Что у вас нового?' />
      </div>
      <div className={styles.CreateArticle__images}>
        <div className={styles.icon}>
          <Photo />
        </div>
      </div>
    </div>
  )
})
