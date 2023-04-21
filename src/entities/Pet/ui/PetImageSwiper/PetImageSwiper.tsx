import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper'
import { Skeleton } from 'shared/ui/Skeleton'
import { AppImage } from 'shared/ui/AppImage'
import classNames from 'classnames'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './PetImageSwiper.scss'

interface PetImageSwiperProps {
  className?: string
  images: string[]

  isLoading?: boolean
}

export const PetImageSwiper = memo((props: PetImageSwiperProps) => {
  const { className, images, isLoading } = props
  return (
    <div className={classNames('PetImageSwiper', {}, [className])}>
      <Swiper
        effect='cards'
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, EffectCards]}
      >
        {images?.map((image, index) => (
          <SwiperSlide className='PetImageSwiper__slider' key={`image-${index}`}>
            <AppImage width='100%' height='100%' src={image} alt={`image-${index}`} />
          </SwiperSlide>
        ))}
        {isLoading && (
          <SwiperSlide className='PetImageSwiper__slider'>
            <Skeleton border='20px' height='65vh' />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
})
