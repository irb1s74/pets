import { memo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import './PetStats.scss'

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
    <div className={classNames('pet-stats', {}, [className])}>
      <div className='pet-stats__about'>
        <AppImage className='pet-stats__image' src={data.previewImg} alt={data.previewImg} />
        <div className='pet-stats__texts'>
          <Text size={24} text={data.name} />
          <Text size={14} text={`${data.likes} лайка`} />
        </div>
      </div>
      <div className='pet-stats__stats'>
        <div className='pet-stats__header'>
          <div className='pet-stats__label'>
            <Text text='Лайки' />
            <span className='pet-stats__span' style={{ backgroundColor: '#F16063FF' }} />
          </div>
          <div className='pet-stats__label'>
            <Text text='Просмотры' />
            <span className='pet-stats__span' style={{ backgroundColor: '#66CB9F' }} />
          </div>
        </div>
        <div className='pet-stats__chart'>
          {dataChart.map((bar, index) => (
            <div key={index} className='pet-stats__bars'>
              <div
                className='pet-stats__bar'
                style={{ height: `${bar.likes}%`, backgroundColor: '#F16063FF' }}
              />
              <div
                className='pet-stats__bar'
                style={{ height: `${bar.views}%`, backgroundColor: '#66CB9F' }}
              />
            </div>
          ))}
        </div>
        <div className='pet-stats__days'>
          {dataChart.map((data, index) => (
            <div key={index} className='pet-stats__day'>
              <Text size={12} text={data.date} />
              <Text color='gray' size={10} text={data.day} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
