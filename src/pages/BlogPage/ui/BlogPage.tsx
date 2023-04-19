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
import './BlogPage.scss'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  const { data, isLoading } = useGetArticlesQuery()

  return (
    <div className={classNames('BlogPage', {}, [className])}>
      <div className='BlogPage__content'>
        <CreateArticle className='BlogPage__createForm' />
        <ArticleGrid className='BlogPage__grid' isLoading={isLoading}>
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
