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
    <form className={classNames('PetСharacteristicsForm', {}, [className])}>
      <Text
        className='PetСharacteristicsForm__title'
        text='Давайте узнаем больше о вашем питомце'
      />
      <Text className='PetСharacteristicsForm__subtitle' text='Ваш питомец...' />
      <div className='PetСharacteristicsForm__config'>
        <PetTypeList />
        <div className='PetСharacteristicsForm__inputs'>
          <Select
            className='PetСharacteristicsForm__full'
            options={[
              { value: 'Макрочел', label: 'Макрочел' },
              { value: 'Гигачел', label: 'Гигачел' },
              { value: 'Микрочел', label: 'Макрочел' },
              { value: 'Суперчел', label: 'Суперчел' },
              { value: 'Мегачел', label: 'Мегачел' },
            ]}
            label='Порода'
          />
          <Input className='PetСharacteristicsForm__input' label='Дата рождения' type='date' />
          <Input className='PetСharacteristicsForm__input' label='Вес, кг' type='number' />
          <Input className='PetСharacteristicsForm__input' label='Страна' />
          <Input className='PetСharacteristicsForm__input' label='Город' />
        </div>
      </div>
    </form>
  )
})
