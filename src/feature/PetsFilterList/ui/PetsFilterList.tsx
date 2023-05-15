import { memo, useState } from 'react'
import { PetGrid, PetTypeList, useGetPetsQuery } from 'entities/Pet'
import classNames from 'classnames'
import './PetsFilterList.scss'

interface PetsFilterListProps {
  className?: string
}

export const PetsFilterList = memo((props: PetsFilterListProps) => {
  const { className } = props
  const [filter, setFilter] = useState<string>('')
  const { data, isLoading } = useGetPetsQuery(filter)
  const handleSetSort = (id: string, type: string) => {
    setFilter(type)
  }
  return (
    <div className={classNames('pets-filter-list', [className])}>
      <PetTypeList
        className='pets-filter-list__filter'
        active={filter}
        handleChange={handleSetSort}
      />
      <PetGrid className='pets-filter-list__grid' data={data} isLoading={isLoading} />
    </div>
  )
})
