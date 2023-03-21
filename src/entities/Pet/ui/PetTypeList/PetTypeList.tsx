import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Cat from 'shared/assets/icons/cat.svg'
import Dog from 'shared/assets/icons/dog.svg'
import Bird from 'shared/assets/icons/bird.svg'
import Rabbit from 'shared/assets/icons/rabbit.svg'
import Mouse from 'shared/assets/icons/mouse.svg'
import Dino from 'shared/assets/icons/dino.svg'
import classNames from 'classnames'
import styles from './PetTypeList.module.scss'

interface PetTypeListProps {
  className?: string
}

export const PetTypeList = memo((props: PetTypeListProps) => {
  const { className } = props

  const types = [
    {
      label: 'Коты',
      icon: <Cat />,
    },
    {
      label: 'Собаки',
      icon: <Dog />,
    },
    {
      label: 'Птицы',
      icon: <Bird />,
    },
    {
      label: 'Зайцы',
      icon: <Rabbit />,
    },
    {
      label: 'Мыши',
      icon: <Mouse />,
    },
    {
      label: 'Другое',
      icon: <Dino />,
    },
  ]

  return (
    <div className={classNames(styles.PetTypeList, {}, [className])}>
      {types.map((type, index) => (
        <div key={index} className={classNames(styles.PetTypeList__item)}>
          <div className={styles.icon}>{type.icon}</div>
          <Text size={10} weight='semi' text={type.label} />
        </div>
      ))}
    </div>
  )
})
