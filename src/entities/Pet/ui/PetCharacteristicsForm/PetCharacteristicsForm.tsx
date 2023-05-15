import { ChangeEvent, memo } from 'react'
import { PetTypeList } from 'entities/Pet'
import { Text } from 'shared/ui/Text'
import { Select } from 'shared/ui/Select'
import { Input } from 'shared/ui/Input'
import classNames from 'classnames'
import './PetСharacteristicsForm.scss'
import { createPetProps } from 'feature/CreatePetForm/api/createPet'
import { FormikErrors, FormikTouched } from 'formik'

interface PetCharacteristicsFormProps {
  className?: string
  handleChange: {
    (e: ChangeEvent<any>): void
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void
  }
  setValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
  values: createPetProps
  errors: FormikErrors<createPetProps>
  touched: FormikTouched<createPetProps>
}

export const PetCharacteristicsForm = memo((props: PetCharacteristicsFormProps) => {
  const { className, handleChange, setValue, values, errors, touched } = props

  return (
    <form className={classNames('pet-characteristics-form', {}, [className])}>
      <Text
        className='pet-characteristics-form__title'
        text='Давайте узнаем больше о вашем питомце'
      />
      <Text className='pet-characteristics-form__subtitle' text='Ваш питомец...' />
      <div className='pet-characteristics-form__config'>
        <PetTypeList id='type' active={values.type} handleChange={setValue} />
        <div className='pet-characteristics-form__inputs'>
          <Select
            id='breed'
            className='pet-characteristics-form__full'
            onChange={setValue}
            value={values.type}
            options={[
              { value: 'Макрочел', label: 'Макрочел' },
              { value: 'Гигачел', label: 'Гигачел' },
              { value: 'Микрочел', label: 'Макрочел' },
              { value: 'Суперчел', label: 'Суперчел' },
              { value: 'Мегачел', label: 'Мегачел' },
            ]}
            label='Порода'
          />
          <Input
            id='dateOfBirth'
            value={values.dateOfBirth}
            onChange={handleChange}
            className='pet-characteristics-form__input'
            label='Дата рождения'
            error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
            helperText={touched.dateOfBirth && errors.dateOfBirth}
            type='date'
          />
          <Input
            id='weight'
            value={values.weight}
            onChange={handleChange}
            className='pet-characteristics-form__input'
            label='Вес, кг'
            type='number'
            error={touched.weight && Boolean(errors.weight)}
            helperText={touched.weight && errors.weight}
          />
          <Input
            id='country'
            value={values.country}
            onChange={handleChange}
            className='pet-characteristics-form__input'
            label='Страна'
            error={touched.country && Boolean(errors.country)}
            helperText={touched.country && errors.country}
          />
          <Input
            id='city'
            value={values.city}
            onChange={handleChange}
            className='pet-characteristics-form__input'
            label='Город'
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
          />
        </div>
      </div>
    </form>
  )
})
