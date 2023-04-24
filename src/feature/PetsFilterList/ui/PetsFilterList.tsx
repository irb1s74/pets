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
    <div className={classNames('pets-filter-list', [className])}>
      <PetTypeList className='pets-filter-list__filter' />
      <PetGrid className='pets-filter-list__grid' data={data} isLoading={isLoading} />
    </div>
  )
})
