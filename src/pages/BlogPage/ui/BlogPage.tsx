import classNames from 'classnames'
import styles from './BlogPage.module.scss'
import { CreateArticle } from 'feature/CreateArticle'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.BlogPage, {}, [className])}>
      <div className={styles.BlogPage__content}>
        <CreateArticle />
      </div>
    </div>
  )
}
export default BlogPage
