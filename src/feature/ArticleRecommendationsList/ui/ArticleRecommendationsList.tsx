import { ArticleList, useGetArticlesQuery } from 'entities/Article'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { data, isLoading } = useGetArticlesQuery()
  return <ArticleList className={className} articles={data} isLoading={isLoading} />
}
