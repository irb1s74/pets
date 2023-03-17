import { PetList, useGetPetsQuery } from 'entities/Pet'
import { memo } from 'react'

interface PetsRecommendationsListProps {
  className?: string
}

export const PetsRecommendationsList = memo((props: PetsRecommendationsListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery()
  return <PetList className={className} pets={data} isLoading={isLoading} />
})
