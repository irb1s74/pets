import { memo } from 'react'
import { PetTypeList } from 'entities/Pet'
import { Text } from 'shared/ui/Text'
import { Select } from 'shared/ui/Select'
import { Input } from 'shared/ui/Input'
import classNames from 'classnames'
import './PetСharacteristicsForm.scss'

interface PetCharacteristicsFormProps {
  className?: string
}

export const PetCharacteristicsForm = memo((props: PetCharacteristicsFormProps) => {
  const { className } = props
  return (
    <form className={classNames('pet-characteristics-form', {}, [className])}>
      <Text
        className='pet-characteristics-form__title'
        text='Давайте узнаем больше о вашем питомце'
      />
      <Text className='pet-characteristics-form__subtitle' text='Ваш питомец...' />
      <div className='pet-characteristics-form__config'>
        <PetTypeList />
        <div className='pet-characteristics-form__inputs'>
          <Select
            className='pet-characteristics-form__full'
            options={[
              { value: 'Макрочел', label: 'Макрочел' },
              { value: 'Гигачел', label: 'Гигачел' },
              { value: 'Микрочел', label: 'Макрочел' },
              { value: 'Суперчел', label: 'Суперчел' },
              { value: 'Мегачел', label: 'Мегачел' },
            ]}
            label='Порода'
          />
          <Input className='pet-characteristics-form__input' label='Дата рождения' type='date' />
          <Input className='pet-characteristics-form__input' label='Вес, кг' type='number' />
          <Input className='pet-characteristics-form__input' label='Страна' />
          <Input className='pet-characteristics-form__input' label='Город' />
        </div>
      </div>
    </form>
  )
})
