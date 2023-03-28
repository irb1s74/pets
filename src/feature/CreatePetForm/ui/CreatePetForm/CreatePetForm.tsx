import { memo, useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { PetTypeList } from 'entities/Pet'
import { Select } from 'shared/ui/Select'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Switch } from 'shared/ui/Switch'
import { Radio } from 'shared/ui/Radio'
import SuccessIcon from 'shared/assets/icons/successIcon.svg'
import { CreatePetHeader } from '../CreatePetHeader/CreatePetHeader'
import { CreatePetFooter } from '../CreatePetFooter/CreatePetFooter'
import { CreateValidationSchema } from '../../config/CreateValidationSchema'
import classNames from 'classnames'
import styles from './CreatePetForm.module.scss'

interface CreatePetFormProps {
  className?: string
}

const CreatePetForm = memo((props: CreatePetFormProps) => {
  const { className } = props
  const [activeStep, setStep] = useState(1)

  const formik = useFormik({
    initialValues: {
      name: '',
      about: '',
      sex: false,
      goal: '',
    },
    validationSchema: CreateValidationSchema,
    isInitialValid: false,
    onSubmit: async (values) => {
      console.log(values)
    },
  })
  const handleNextForm = useCallback(() => setStep((prevState) => prevState + 1), [])
  const handlePrevForm = useCallback(() => setStep((prevState) => prevState - 1), [])

  return (
    <div className={classNames(styles.CreatePetForm, {}, [className])}>
      <CreatePetHeader activeStep={activeStep} />
      {activeStep === 1 ? (
        <div className={styles.CreatePetForm__form}>
          <Text
            className={styles.CreatePetForm__title}
            size={20}
            text='Давайте узнаем немного о вашем питомце?'
          />
          <div className={styles.groupInputSwitch}>
            <Input
              id='name'
              className={styles.inputFullWidth}
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
            className={styles.textarea}
            label='Опишите вашего питомца'
          />
          <Text text='С какой целью выкладываете питомца?' size={14} />
          <div className={styles.groupRadio}>
            <div className={styles.radio}>
              <Radio
                id='goal'
                onChange={formik.handleChange}
                value='Просто показываю'
                checked={formik.values.goal === 'Просто показываю'}
              />
              <Text weight='semi' size={10} text='Просто показываю' />
            </div>
            <div className={styles.radio}>
              <Radio
                id='goal'
                onChange={formik.handleChange}
                value='Отдаю в добрые руки'
                checked={formik.values.goal === 'Отдаю в добрые руки'}
              />
              <Text weight='semi' size={10} text='Отдаю в добрые руки' />
            </div>
            <div className={styles.radio}>
              <Radio
                id='goal'
                onChange={formik.handleChange}
                checked={formik.values.goal === 'Торгую микрочелами'}
                value='Торгую микрочелами'
              />
              <Text weight='semi' size={10} text='Торгую микрочелами' />
            </div>
          </div>
        </div>
      ) : activeStep === 2 ? (
        <div className={styles.CreatePetForm__secondForm}>
          <Text className={styles.title} size={20} text='Загрузите пару изображений питомца' />
          <Text
            className={styles.subtitle}
            size={12}
            text='Вы можете загрузить не более 15 изображений'
          />
          <div className={styles.imgArea}>
            <Text
              className={styles.imgArea__text}
              size={18}
              text='Выберете файлы или перетащите их сюда'
            />
          </div>
        </div>
      ) : activeStep === 3 ? (
        <div className={styles.CreatePetForm__thirdForm}>
          <Text className={styles.title} text='Давайте узнаем больше о вашем питомце' />
          <Text className={styles.subtitle} text='Ваш питомец...' />
          <div className={styles.config}>
            <PetTypeList />
            <div className={styles.config__inputs}>
              <Select
                className={styles.full}
                options={[
                  { value: 'Макрочел', label: 'Макрочел' },
                  { value: 'Гигачел', label: 'Гигачел' },
                  { value: 'Микрочел', label: 'Макрочел' },
                  { value: 'Суперчел', label: 'Суперчел' },
                  { value: 'Мегачел', label: 'Мегачел' },
                ]}
                label='Порода'
              />
              <Input className={styles.input} label='Дата рождения' type='date' />
              <Input className={styles.input} label='Вес, кг' type='number' />
              <Input className={styles.input} label='Страна' />
              <Input className={styles.input} label='Город' />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.CreatePetForm__resultForm}>
          <div>
            <SuccessIcon />
          </div>
          <Text size={32} text='Ваш питомец добавлен' />
        </div>
      )}
      <CreatePetFooter activeStep={activeStep} onBack={handlePrevForm} onWards={handleNextForm} />
    </div>
  )
})
export default CreatePetForm
