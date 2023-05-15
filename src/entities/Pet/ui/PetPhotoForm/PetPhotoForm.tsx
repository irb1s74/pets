import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './PetPhotoForm.scss'
import { createPetProps } from 'feature/CreatePetForm/api/createPet'
import { FormikErrors, FormikTouched } from 'formik'
import { DragFile } from 'shared/ui/DragFile'
import { AppImage } from 'shared/ui/AppImage'

interface PetPhotoFormProps {
  className?: string
  setValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
  values: createPetProps
  errors: FormikErrors<createPetProps>
  touched: FormikTouched<createPetProps>
}

export const PetPhotoForm = memo((props: PetPhotoFormProps) => {
  const { className, setValue, values } = props

  return (
    <DragFile id='images' handleChange={setValue}>
      <div className={classNames('pet-photo-form', {}, [className])}>
        <Text
          className='pet-photo-form__title'
          size={20}
          text='Загрузите пару изображений питомца'
        />
        <Text
          className='pet-photo-form__subtitle'
          size={12}
          text='Вы можете загрузить не более 15 изображений'
        />
        <div className='pet-photo-form__img-area'>
          {values.images?.length ? (
            Array.from(values.images).map((src: File, index: number) => (
              <AppImage
                className='pet-photo-form__img'
                key={index}
                inAssets={true}
                src={URL.createObjectURL(src)}
              />
            ))
          ) : (
            <Text
              className='pet-photo-form__text'
              size={18}
              text='Выберете файлы или перетащите их сюда'
            />
          )}
        </div>
      </div>
    </DragFile>
  )
})
