import { memo, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Article } from '../../model/types/Article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import classNames from 'classnames'
import 'swiper/css'
import './ArticleList.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  slidesPerView?: number
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, slidesPerView = 'auto' } = props

  const getSkeletons = useMemo(
    () =>
      new Array(slidesPerView).fill(0).map((item, index) => (
        <SwiperSlide key={index}>
          <ArticleListItemSkeleton />
        </SwiperSlide>
      )),
    [],
  )

  return (
    <div className={classNames('ArticleList', {}, [className])}>
      <Swiper spaceBetween={40} slidesPerView={slidesPerView}>
        {articles?.map((item) => (
          <SwiperSlide key={item.id}>
            <ArticleListItem data={item} />
          </SwiperSlide>
        ))}
        {isLoading && getSkeletons}
      </Swiper>
    </div>
  )
})
