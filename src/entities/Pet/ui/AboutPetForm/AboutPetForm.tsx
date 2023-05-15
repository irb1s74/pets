import { ChangeEvent, memo } from 'react'
import { FormikErrors, FormikTouched } from 'formik'
import { createPetProps } from 'feature/CreatePetForm/api/createPet'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Switch } from 'shared/ui/Switch'
import { Radio } from 'shared/ui/Radio'
import classNames from 'classnames'
import './AboutPetForm.scss'

interface AboutPetFormProps {
  className?: string
  handleChange: {
    (e: ChangeEvent<any>): void
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void
  }
  values: createPetProps
  errors: FormikErrors<createPetProps>
  touched: FormikTouched<createPetProps>
}

export const AboutPetForm = memo((props: AboutPetFormProps) => {
  const { className, handleChange, values, errors, touched } = props

  return (
    <div className={classNames('about-pet-form', {}, [className])}>
      <Text
        className='about-pet-form__title'
        size={20}
        text='Давайте узнаем немного о вашем питомце?'
      />
      <div className='about-pet-form__group-input-switch'>
        <Input
          id='name'
          className='about-pet-form__input-full-width'
          label='Имя питомца'
          onChange={handleChange}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <Switch id='gender' onChange={handleChange} checked={values.gender} />
      </div>
      <Input
        className='about-pet-form__textarea'
        id='description'
        onChange={handleChange}
        value={values.description}
        error={touched.description && Boolean(errors.description)}
        helperText={touched.description && errors.description}
        label='Опишите вашего питомца'
      />
      <Text text='С какой целью выкладываете питомца?' size={14} />
      <div className='about-pet-form__group-radio'>
        <div className='about-pet-form__radio'>
          <Radio
            id='purposeOfPosting'
            onChange={handleChange}
            value='Просто показываю'
            checked={values.purposeOfPosting === 'Просто показываю'}
          />
          <Text weight='semi' size={10} text='Просто показываю' />
        </div>
        <div className='about-pet-form__radio'>
          <Radio
            id='purposeOfPosting'
            onChange={handleChange}
            value='Отдаю в добрые руки'
            checked={values.purposeOfPosting === 'Отдаю в добрые руки'}
          />
          <Text weight='semi' size={10} text='Отдаю в добрые руки' />
        </div>
        <div className='about-pet-form__radio'>
          <Radio
            id='purposeOfPosting'
            onChange={handleChange}
            checked={values.purposeOfPosting === 'Торгую микрочелами'}
            value='Торгую микрочелами'
          />
          <Text weight='semi' size={10} text='Торгую микрочелами' />
        </div>
      </div>
    </div>
  )
})
