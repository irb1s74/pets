import { memo } from 'react'
import { PetGrid, PetTypeList, useGetPetsQuery } from 'entities/Pet'
import classNames from 'classnames'
import './PetsFilterList.scss'

interface PetsFilterListProps {
  className?: string
}

export const PetsFilterList = memo((props: PetsFilterListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery()

  return (
    <div className={classNames('PetsFilterList', [className])}>
      <PetTypeList className='PetsFilterList__filter' />
      <PetGrid className='PetsFilterList__grid' data={data} isLoading={isLoading} />
    </div>
  )
})
