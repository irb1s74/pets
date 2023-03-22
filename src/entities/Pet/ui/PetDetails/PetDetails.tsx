import { memo } from 'react'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import Location from 'shared/assets/icons/location.svg'
import Heart from 'shared/assets/icons/heart.svg'
import Money from 'shared/assets/icons/money.svg'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import styles from './PetDetails.module.scss'
import dayjs from 'dayjs'
import { Skeleton } from 'shared/ui/Skeleton'

interface PetDetailsProps {
  className?: string

  isLoading?: boolean
  data: Pet
}

export const PetDetails = memo((props: PetDetailsProps) => {
  const { className, data, isLoading } = props

  if (isLoading) {
    return <Skeleton width='100%' height='100%' border='10px' />
  }

  return (
    <div className={classNames(styles.PetDetails, {}, [className])}>
      <div className={styles.PetDetails__header}>
        <div className={styles.title}>
          <Text size={72} weight='bold' color='primary' text={`${data?.name},`} />
          <Location />
          <Text size={72} weight='bold' text={data?.location} />
        </div>
        <div className={styles.type}>
          <Text size={32} weight='medium' text={data?.type} />
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <Heart />
            <Text weight='medium' text={`${data?.likes} Лайка`} />
          </div>
          <div className={styles.stat}>
            <Money />
            <Text text='5 000 ₽' />
          </div>
        </div>
      </div>
      <div className={styles.PetDetails__divider} />
      <div className={styles.PetDetails__characteristic}>
        <div className={styles.values}>
          <Text weight='500' size={32} text='Возраст' />
          <Text weight='500' size={32} text='Вес' />
          <Text weight='500' size={32} text='Пол' />
          <Text weight='500' size={32} color='gray' text={`${dayjs(data?.age).get('years')}`} />
          <Text weight='500' size={32} color='gray' text={`${data?.weight} кг`} />
          <Text weight='500' size={32} color='gray' text={`${data?.sex ? 'Мужской' : 'Женский'}`} />
        </div>
      </div>
      <div className={styles.PetDetails__description}>
        <Text size={32} weight='medium' text='Описание' />
        <Text weight='light' size={32} text={data?.about} />
      </div>
      <Button>{'Купить - 5 000 ₽'}</Button>
    </div>
  )
})
