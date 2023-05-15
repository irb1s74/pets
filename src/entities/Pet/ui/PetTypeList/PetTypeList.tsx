import { memo } from 'react'
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
  id?: string
  className?: string
  active?: string | string[]
  handleChange?: (id: string, value: string) => void
}

export const PetTypeList = memo((props: PetTypeListProps) => {
  const { id = 'type', active, className, handleChange } = props

  const types = [
    {
      label: 'Коты',
      value: 'cat',
      icon: <Cat />,
    },
    {
      label: 'Собаки',
      value: 'dog',
      icon: <Dog />,
    },
    {
      label: 'Птицы',
      value: 'bird',
      icon: <Bird />,
    },
    {
      label: 'Зайцы',
      value: 'rabbit',
      icon: <Rabbit />,
    },
    {
      label: 'Мыши',
      value: 'mouse',
      icon: <Mouse />,
    },
    {
      label: 'Другое',
      value: 'other',
      icon: <Dino />,
    },
  ]
  const onChange = (value: string) => {
    if (handleChange) {
      return () => handleChange(id, value)
    }
  }

  return (
    <div className={classNames('pet-type-list', {}, [className])}>
      {types.map((type, index) => (
        <div
          key={index}
          className={classNames('pet-type-list__item', {
            ['pet-type-list__item_active']: active?.includes(type.value) || active === type.value,
          })}
          onClick={onChange(type.value)}
        >
          <div className='pet-type-list__icon'>{type.icon}</div>
          <Text size={10} weight='semi' text={type.label} />
        </div>
      ))}
    </div>
  )
})
