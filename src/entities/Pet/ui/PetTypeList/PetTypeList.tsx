import { memo, useState } from 'react'
import { Text } from 'shared/ui/Text'
import Cat from 'shared/assets/icons/cat.svg'
import Dog from 'shared/assets/icons/dog.svg'
import Bird from 'shared/assets/icons/bird.svg'
import Rabbit from 'shared/assets/icons/rabbit.svg'
import Mouse from 'shared/assets/icons/mouse.svg'
import Dino from 'shared/assets/icons/dino.svg'
import classNames from 'classnames'
import './PetTypeList.scss'

interface PetTypeListProps {
  className?: string
}

export const PetTypeList = memo((props: PetTypeListProps) => {
  const { className } = props
  const [filter, setFilter] = useState<string[]>([])
  const handleSetSort = (type: string) => () => {
    const isInclude = filter.includes(type)
    setFilter(isInclude ? filter.filter((item) => item !== type) : filter.concat(type))
  }

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
    <div className={classNames('pet-type-list', {}, [className])}>
      {types.map((type, index) => (
        <div
          key={index}
          className={classNames('pet-type-list__item', {
            ['pet-type-list__item_active']: filter.includes(type.label),
          })}
          onClick={handleSetSort(type.label)}
        >
          <div className='pet-type-list__icon'>{type.icon}</div>
          <Text size={10} weight='semi' text={type.label} />
        </div>
      ))}
    </div>
  )
})
