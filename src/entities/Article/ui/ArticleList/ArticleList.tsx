import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Article } from '../../model/types/Article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import classNames from 'classnames'
import styles from './ArticleList.module.scss'
import 'swiper/css'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  slidesPerView?: number
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => (
    <SwiperSlide key={index}>
      <ArticleListItemSkeleton />
    </SwiperSlide>
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, slidesPerView = 'auto' } = props

  return (
    <div className={classNames(styles.ArticleList, {}, [className])}>
      <Swiper spaceBetween={40} slidesPerView={slidesPerView}>
        {articles?.map((item) => (
          <SwiperSlide key={item.id}>
            <ArticleListItem data={item} />
          </SwiperSlide>
        ))}
        {isLoading && getSkeletons()}
      </Swiper>
    </div>
  )
})
