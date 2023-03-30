import { memo } from 'react'
import { PetGrid, PetTypeList, useGetPetsQuery } from 'entities/Pet'
import styles from './PetsFilterList.module.scss'
import classNames from 'classnames'

interface PetsFilterListProps {
  className?: string
}

export const PetsFilterList = memo((props: PetsFilterListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery()

  return (
    <div className={classNames(styles.PetsFilterList, [className])}>
      <PetTypeList className={styles.PetsFilterList__filter} />
      <PetGrid className={styles.PetsFilterList__grid} data={data} isLoading={isLoading} />
    </div>
  )
})
