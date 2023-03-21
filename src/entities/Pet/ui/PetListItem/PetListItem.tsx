import { memo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import { Pet } from '../../model/types/Pet'
import Heart from 'shared/assets/icons/heart.svg'
import classNames from 'classnames'
import styles from './PetListItem.module.scss'

interface PetListItemProps {
  className?: string
  data: Pet
}

export const PetListItem = memo((props: PetListItemProps) => {
  const { className, data } = props

  return (
    <div className={classNames(styles.PetListItem, {}, [className])}>
      <div className={styles.PetListItem__image}>
        <AppImage
          src={data.previewImg}
          alt={data.name}
          fallback={<Skeleton width='100%' border='16px' height='220px' />}
        />
      </div>
      <div className={styles.PetListItem__content}>
        <div className={styles.about}>
          <Text size={24} text={data.name} />
          <Text size={15} text={data.type} className={styles.type} />
        </div>
        <div className={styles.actions}>
          <Text size={15} className={styles.countLikes} text={`${data.likes} лайка`} />
          <div className={styles.iconBtn}>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  )
})
