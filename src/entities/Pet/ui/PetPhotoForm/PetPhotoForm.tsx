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
    <div className={classNames('PetPhotoForm', {}, [className])}>
      <Text className='PetPhotoForm__title' size={20} text='Загрузите пару изображений питомца' />
      <Text
        className='PetPhotoForm__subtitle'
        size={12}
        text='Вы можете загрузить не более 15 изображений'
      />
      <div className='PetPhotoForm__imgArea'>
        <Text
          className='PetPhotoForm__text'
          size={18}
          text='Выберете файлы или перетащите их сюда'
        />
      </div>
    </div>
  )
})
