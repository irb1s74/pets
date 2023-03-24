import { Card } from 'shared/ui/Card'
import { CreateArticle } from 'feature/CreateArticle'
import {
  ArticleContent,
  ArticleFooter,
  ArticleGrid,
  ArticleHeader,
  useGetArticlesQuery,
} from 'entities/Article'
import classNames from 'classnames'
import styles from './BlogPage.module.scss'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  const { data, isLoading } = useGetArticlesQuery()

  return (
    <div className={classNames(styles.BlogPage, {}, [className])}>
      <div className={styles.BlogPage__content}>
        <CreateArticle className={styles.createForm} />
        <ArticleGrid isLoading={isLoading}>
          {data?.map((article) => (
            <Card key={article.id}>
              <ArticleHeader article={article} />
              <ArticleContent article={article} />
              <ArticleFooter />
            </Card>
          ))}
        </ArticleGrid>
      </div>
    </div>
  )
}
export default BlogPage
