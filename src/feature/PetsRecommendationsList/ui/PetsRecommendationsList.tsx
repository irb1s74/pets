import { memo, useMemo } from 'react'
import { PetList, useGetPetsQuery } from 'entities/Pet'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'

interface PetsRecommendationsListProps {
  className?: string
}

export const PetsRecommendationsList = memo((props: PetsRecommendationsListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery('')
  const { width } = useWindowDimensions()

  const slidesPerView = useMemo(() => (width >= 768 ? 2 : 1), [width])

  return (
    <PetList
      className={className}
      data={data}
      slidesPerView={slidesPerView}
      isLoading={isLoading}
    />
  )
})
