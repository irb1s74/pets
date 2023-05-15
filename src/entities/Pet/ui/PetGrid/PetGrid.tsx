import { memo, useMemo } from 'react'
import { PetListItem } from '../PetListItem/PetListItem'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import './PetGrid.scss'

interface PetGridProps {
  className?: string
  data: Pet[]
  isLoading?: boolean
}

export const PetGrid = memo((props: PetGridProps) => {
  const { className, isLoading, data } = props

  const getSkeletons = useMemo(
    () =>
      new Array(8)
        .fill(0)
        .map((item, index) => <PetListItemSkeleton className='pet-grid__item' key={index} />),
    [],
  )

  return (
    <ul className={classNames('pet-grid', {}, [className])}>
      {data?.map((pet) => (
        <PetListItem className='pet-grid__item' key={pet.id} data={pet} />
      ))}
      {isLoading && getSkeletons}
    </ul>
  )
})
