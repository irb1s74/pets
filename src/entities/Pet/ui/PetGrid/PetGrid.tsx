import { memo } from 'react'
import { PetListItem } from '../PetListItem/PetListItem'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import styles from './PetGrid.module.scss'

interface PetGridProps {
  className?: string

  data: Pet[]
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(2)
    .fill(0)
    .map((item, index) => <PetListItemSkeleton className={styles.PetGrid__item} key={index} />)

export const PetGrid = memo((props: PetGridProps) => {
  const { className, isLoading, data } = props
  return (
    <div className={classNames(styles.PetGrid, {}, [className])}>
      {data?.map((pet) => (
        <PetListItem className={styles.PetGrid__item} key={pet.id} data={pet} />
      ))}
      {isLoading && getSkeletons()}
    </div>
  )
})
