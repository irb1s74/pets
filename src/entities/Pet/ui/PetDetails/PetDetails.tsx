import { memo } from 'react'
import { Theme } from 'shared/const/theme'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { Skeleton } from 'shared/ui/Skeleton'
import Location from 'shared/assets/icons/location.svg'
import DarkLocation from 'shared/assets/icons/darkLocation.svg'
import Heart from 'shared/assets/icons/heart.svg'
import Money from 'shared/assets/icons/money.svg'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import './PetDetails.scss'

interface PetDetailsProps {
  className?: string

  isLoading?: boolean
  data: Pet
}

export const PetDetails = memo((props: PetDetailsProps) => {
  const { className, data, isLoading } = props

  const { theme } = useTheme()

  if (isLoading) {
    return <Skeleton className='pet-details__skeleton' width='100%' height='100%' border='10px' />
  }

  return (
    <div className={classNames('pet-details', {}, [className])}>
      <div className='pet-details__header'>
        <div className='pet-details__info'>
          <Text size={72} weight='bold' color='primary' text={`${data?.name},`} />
          {theme === Theme.LIGHT ? <DarkLocation /> : <Location />}
          <Text size={72} weight='bold' text={data?.country} />
        </div>
        <div className='pet-details__petType'>
          <Text
            color={theme === Theme.LIGHT ? 'dark' : 'gray'}
            size={32}
            weight='medium'
            text={data?.type}
          />
        </div>
        <div className='pet-details__stats'>
          <div className='pet-details__stat'>
            <Heart />
            <Text weight='medium' text={`${data?.likes} Лайка`} />
          </div>
          <div className='pet-details__stat'>
            <Money />
            <Text text='5 000 ₽' />
          </div>
        </div>
      </div>
      <div className='pet-details__divider' />
      <div className='pet-details__characteristic'>
        <div className='pet-details__values'>
          <Text weight='500' size={32} text='Возраст' />
          <Text weight='500' size={32} text='Вес' />
          <Text weight='500' size={32} text='Пол' />
          <Text
            weight='500'
            size={32}
            color='gray'
            text={`${new Date().getFullYear() - new Date(data?.dateOfBirth).getFullYear()} года`}
          />
          <Text weight='500' size={32} color='gray' text={`${data?.weight} кг`} />
          <Text
            weight='500'
            size={32}
            color='gray'
            text={`${data?.gender ? 'Мужской' : 'Женский'}`}
          />
        </div>
      </div>
      <div className='pet-details__description'>
        <Text size={32} weight='medium' text='Описание' />
        <Text weight='light' size={32} text={data?.description} />
      </div>
      <Button className='pet-details__btn'>Купить - 5 000 ₽</Button>
    </div>
  )
})
