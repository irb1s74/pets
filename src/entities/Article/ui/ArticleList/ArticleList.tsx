import { memo } from 'react'
import { Article } from '../../model/types/Article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import classNames from 'classnames'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
}

const getSkeletons = () =>
  new Array(4).fill(0).map((item, index) => (
    <SwiperSlide key={index}>
      <ArticleListItemSkeleton />{' '}
    </SwiperSlide>
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading } = props
  return (
    <div className={classNames(styles.ArticleList, {}, [className])}>
      <Swiper spaceBetween={40} slidesPerView={4} modules={[Navigation]}>
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
