import { memo } from 'react'
import { PetStats, useGetPetsQuery } from 'entities/Pet'

interface PetsStatisticListProps {
  className?: string
}

export const PetsStatisticList = memo((props: PetsStatisticListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery()
  return <PetStats className={className} data={data ? data[3] : undefined} isLoading={isLoading} />
})
