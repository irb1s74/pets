import { Card } from 'shared/ui/Card'
import { CreateArticle } from 'feature/CreateArticle'
import { ArticleContent, ArticleGrid, ArticleHeader, useGetArticlesQuery } from 'entities/Article'
import classNames from 'classnames'
import './BlogPage.scss'
import { CreateCommentArticle } from 'feature/CreateCommentArticle/ui/CreateCommentArticle'

interface BlogPageProps {
  className?: string
}

const BlogPage = (props: BlogPageProps) => {
  const { className } = props
  const { data, isLoading } = useGetArticlesQuery()

  return (
    <div className={classNames('blog-page', {}, [className])}>
      <div className='blog-page__content'>
        <CreateArticle className='blog-page__create-form' />
        <ArticleGrid className='blog-page__grid' isLoading={isLoading}>
          {data?.map((article) => (
            <Card key={article.id}>
              <ArticleHeader className='blog-page__article-header' article={article} />
              <ArticleContent article={article} />
              <CreateCommentArticle article={article} />
            </Card>
          ))}
        </ArticleGrid>
      </div>
    </div>
  )
}
export default BlogPage
