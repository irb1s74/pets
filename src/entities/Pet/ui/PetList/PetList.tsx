import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pet } from '../../model/types/Pet'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { PetListItem } from '../PetListItem/PetListItem'
import classNames from 'classnames'
import styles from './PetList.module.scss'
import 'swiper/css'

interface PetListProps {
  className?: string
  data: Pet[]
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(2).fill(0).map((item, index) => (
    <SwiperSlide key={index}>
      <PetListItemSkeleton />
    </SwiperSlide>
  ))

export const PetList = memo((props: PetListProps) => {
  const { className, data, isLoading } = props
  return (
    <div className={classNames(styles.PetList, {}, [className])}>
      <Swiper spaceBetween={20} slidesPerView={2}>
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <PetListItem className={styles.PetList__item} data={item} />
          </SwiperSlide>
        ))}
        {isLoading && getSkeletons()}
      </Swiper>
    </div>
  )
})
