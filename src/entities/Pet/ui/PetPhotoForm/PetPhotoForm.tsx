import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './PetPhotoForm.scss'

interface PetPhotoFormProps {
  className?: string
}

export const PetPhotoForm = memo((props: PetPhotoFormProps) => {
  const { className } = props
  return (
    <div className={classNames('pet-photo-form', {}, [className])}>
      <Text className='pet-photo-form__title' size={20} text='Загрузите пару изображений питомца' />
      <Text
        className='pet-photo-form__subtitle'
        size={12}
        text='Вы можете загрузить не более 15 изображений'
      />
      <div className='pet-photo-form__img-area'>
        <Text
          className='pet-photo-form__text'
          size={18}
          text='Выберете файлы или перетащите их сюда'
        />
      </div>
    </div>
  )
})
