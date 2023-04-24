import { memo, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pet } from '../../model/types/Pet'
import { PetListItemSkeleton } from '../PetListItem/PetListItemSkeleton'
import { PetListItem } from '../PetListItem/PetListItem'
import classNames from 'classnames'
import './PetList.scss'
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
          <PetListItemSkeleton className='pet-list__item' />
        </SwiperSlide>
      )),
    [],
  )

  return (
    <div className={classNames('pet-list', {}, [className])}>
      <Swiper spaceBetween={20} slidesPerView={slidesPerView}>
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <PetListItem className='pet-list__item' data={item} />
          </SwiperSlide>
        ))}
        {isLoading && getSkeletons}
      </Swiper>
    </div>
  )
})
