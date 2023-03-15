import classNames from 'classnames'
import styles from './BlogPage.module.scss'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  return <div className={classNames(styles.BlogPage, {}, [className])}></div>
}
export default BlogPage
