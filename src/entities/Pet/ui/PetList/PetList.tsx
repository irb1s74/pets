import { memo, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pet } from '../../model/types/Pet'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { PetListItem } from '../PetListItem/PetListItem'
import classNames from 'classnames'
import styles from './PetList.module.scss'
import 'swiper/css'

interface PetListProps {
  className?: string
  slidesPerView?: number
  data: Pet[]
  isLoading?: boolean
}

export const PetList = memo((props: PetListProps) => {
  const { className, data, isLoading, slidesPerView } = props

  const getSkeletons = useMemo(
    () =>
      new Array(2).fill(0).map((item, index) => (
        <SwiperSlide key={index}>
          <PetListItemSkeleton className={styles.PetList__item} />
        </SwiperSlide>
      )),
    [],
  )

  return (
    <div className={classNames(styles.PetList, {}, [className])}>
      <Swiper spaceBetween={20} slidesPerView={slidesPerView}>
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <PetListItem className={styles.PetList__item} data={item} />
          </SwiperSlide>
        ))}
        {isLoading && getSkeletons}
      </Swiper>
    </div>
  )
})
