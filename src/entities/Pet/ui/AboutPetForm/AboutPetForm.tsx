import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Switch } from 'shared/ui/Switch'
import { Radio } from 'shared/ui/Radio'
import classNames from 'classnames'
import { useFormik } from 'formik'
import './AboutPetForm.scss'

interface AboutPetFormProps {
  className?: string
}

export const AboutPetForm = memo((props: AboutPetFormProps) => {
  const { className } = props

  const formik = useFormik({
    initialValues: {
      name: '',
      about: '',
      sex: false,
      goal: '',
    },
    // validationSchema: CreateValidationSchema,
    isInitialValid: false,
    onSubmit: async (values) => {
      console.log(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit} className={classNames('AboutPetForm', {}, [className])}>
      <Text
        className='CreatePetForm__title'
        size={20}
        text='Давайте узнаем немного о вашем питомце?'
      />
      <div className='AboutPetForm__groupInputSwitch'>
        <Input
          id='name'
          className='AboutPetForm__inputFullWidth'
          label='Имя питомца'
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Switch id='sex' onChange={formik.handleChange} checked={formik.values.sex} />
      </div>
      <Input
        id='about'
        onChange={formik.handleChange}
        className='AboutPetForm__textarea'
        label='Опишите вашего питомца'
      />
      <Text text='С какой целью выкладываете питомца?' size={14} />
      <div className='AboutPetForm__groupRadio'>
        <div className='AboutPetForm__radio'>
          <Radio
            id='goal'
            onChange={formik.handleChange}
            value='Просто показываю'
            checked={formik.values.goal === 'Просто показываю'}
          />
          <Text weight='semi' size={10} text='Просто показываю' />
        </div>
        <div className='AboutPetForm__radio'>
          <Radio
            id='goal'
            onChange={formik.handleChange}
            value='Отдаю в добрые руки'
            checked={formik.values.goal === 'Отдаю в добрые руки'}
          />
          <Text weight='semi' size={10} text='Отдаю в добрые руки' />
        </div>
        <div className='AboutPetForm__radio'>
          <Radio
            id='goal'
            onChange={formik.handleChange}
            checked={formik.values.goal === 'Торгую микрочелами'}
            value='Торгую микрочелами'
          />
          <Text weight='semi' size={10} text='Торгую микрочелами' />
        </div>
      </div>
    </form>
  )
})
