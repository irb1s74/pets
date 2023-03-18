import { memo } from 'react'
import { Pet } from '../../model/types/Pet'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { PetListItem } from '../PetListItem/PetListItem'
import classNames from 'classnames'
import styles from './PetList.module.scss'

interface PetListProps {
  className?: string
  pets: Pet[]
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(2).fill(0).map((item, index) => <PetListItemSkeleton key={index} />)

export const PetList = memo((props: PetListProps) => {
  const { className, pets, isLoading } = props
  return (
    <div className={classNames(styles.PetList, {}, [className])}>
      {pets?.map((item) => (
        <PetListItem key={item.id} data={item} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})