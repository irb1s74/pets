import classNames from 'classnames'
import styles from './BlogPage.module.scss'
import { Page } from 'widget/Page'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  return (
    <Page title='Новости'>
      <div className={classNames(styles.BlogPage, {}, [className])}></div>
    </Page>
  )
}
export default BlogPage
