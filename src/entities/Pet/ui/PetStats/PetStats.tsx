import { memo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import styles from './PetStats.module.scss'

interface PetStatsProps {
  data: Pet
  isLoading?: boolean
  className?: string
}

export const PetStats = memo((props: PetStatsProps) => {
  const { className, data, isLoading } = props

  if (isLoading) {
    return <Skeleton className={classNames([className])} border='16px' width='100%' height='100%' />
  }
  const dataChart = [
    {
      date: '17',
      day: 'ПН',
      likes: 15,
      views: 40,
    },
    {
      date: '18',
      day: 'ВТ',
      likes: 10,
      views: 30,
    },
    {
      date: '19',
      day: 'СР',
      likes: 15,
      views: 40,
    },
    {
      date: '20',
      day: 'ЧТ',
      likes: 15,
      views: 40,
    },
    {
      date: '21',
      day: 'ПТ',
      likes: 8,
      views: 40,
    },
    {
      date: '22',
      day: 'СБ',
      likes: 15,
      views: 40,
    },
    {
      date: '23',
      day: 'ВС',
      likes: 15,
      views: 40,
    },
  ]

  return (
    <div className={classNames(styles.PetStats, {}, [className])}>
      <div className={styles.PetStats__about}>
        <AppImage className={styles.image} src={data.previewImg} alt={data.previewImg} />
        <div className={styles.texts}>
          <Text size={24} text={data.name} />
          <Text size={14} text={`${data.likes} лайка`} />
        </div>
      </div>
      <div className={styles.PetStats__stats}>
        <div className={styles.header}>
          <div className={styles.label}>
            <Text text='Лайки' />
            <span className={styles.span} style={{ backgroundColor: '#F16063FF' }} />
          </div>
          <div className={styles.label}>
            <Text text='Просмотры' />
            <span className={styles.span} style={{ backgroundColor: '#66CB9F' }} />
          </div>
        </div>
        <div className={styles.chart}>
          {dataChart.map((bar, index) => (
            <div key={index} className={styles.bars}>
              <div
                className={styles.bar}
                style={{ height: `${bar.likes}%`, backgroundColor: '#F16063FF' }}
              />
              <div
                className={styles.bar}
                style={{ height: `${bar.views}%`, backgroundColor: '#66CB9F' }}
              />
            </div>
          ))}
        </div>
        <div className={styles.days}>
          {dataChart.map((data, index) => (
            <div key={index} className={styles.day}>
              <Text size={12} text={data.date} />
              <Text color='gray' size={10} text={data.day} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
