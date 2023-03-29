import { memo } from 'react'
import { PetGrid, PetTypeList, useGetPetsQuery } from 'entities/Pet'
import styles from './PetsFilterList.module.scss'

interface PetsFilterListProps {
  className?: string
}

export const PetsFilterList = memo((props: PetsFilterListProps) => {
  const { className } = props
  const { data, isLoading } = useGetPetsQuery()

  return (
    <div className={styles.PetsFilterList}>
      <PetTypeList className={styles.PetsFilterList__filter} />
      <PetGrid className={styles.PetsFilterList__grid} data={data} isLoading={isLoading} />
    </div>
  )
})
