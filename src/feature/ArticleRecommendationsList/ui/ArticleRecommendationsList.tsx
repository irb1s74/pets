import { ArticleList, useGetArticlesQuery } from 'entities/Article'
import { useMemo } from 'react'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { data, isLoading } = useGetArticlesQuery()
  const { width } = useWindowDimensions()

  const slidesPerView = useMemo(
    () => (width >= 1800 ? 4 : width > 1680 ? 3 : width > 768 ? 2 : 1),
    [width],
  )

  return (
    <ArticleList
      className={className}
      articles={data}
      isLoading={isLoading}
      slidesPerView={slidesPerView}
    />
  )
}
