import { memo, useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { AboutPetForm, PetCharacteristicsForm, PetPhotoForm } from 'entities/Pet'
import { Text } from 'shared/ui/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import SuccessIcon from 'shared/assets/icons/successIcon.svg'
import ErrorIcon from 'shared/assets/icons/errorIcon.svg'
import { CreatePetHeader } from '../CreatePetHeader/CreatePetHeader'
import { CreatePetFooter } from '../CreatePetFooter/CreatePetFooter'
import { createPet, createPetProps } from '../../api/createPet'
import { createValidationSchema } from '../../config/CreateValidationSchema'
import classNames from 'classnames'
import './CreatePetForm.scss'

interface CreatePetFormProps {
  className?: string
}

const CreatePetForm = memo((props: CreatePetFormProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [activeStep, setStep] = useState(1)

  const handleNextForm = useCallback(
    () => setStep((prevState) => (prevState < 3 ? prevState + 1 : 1)),
    [],
  )
  const handlePrevForm = useCallback(() => setStep((prevState) => prevState - 1), [])

  const initialValues: createPetProps = {
    images: undefined,
    name: '',
    gender: true,
    description: '',
    purposeOfPosting: '',
    type: '',
    breed: '',
    dateOfBirth: '',
    weight: 0,
    country: '',
    city: '',
  }

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: createValidationSchema,
    onSubmit: async (values) => {
      const res = await dispatch(createPet(values))
      if (typeof res.payload === 'string') {
        setStep(5)
      } else {
        setStep(4)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={classNames('create-pet-form', {}, [className])}>
      <CreatePetHeader className='create-pet-form__header' activeStep={activeStep} />
      {activeStep === 1 ? (
        <AboutPetForm
          className='create-pet-form__form'
          handleChange={formik.handleChange}
          touched={formik.touched}
          values={formik.values}
          errors={formik.errors}
        />
      ) : activeStep === 2 ? (
        <PetPhotoForm
          className='create-pet-form__form'
          setValue={formik.setFieldValue}
          touched={formik.touched}
          values={formik.values}
          errors={formik.errors}
        />
      ) : activeStep === 3 ? (
        <PetCharacteristicsForm
          className='create-pet-form__form'
          handleChange={formik.handleChange}
          setValue={formik.setFieldValue}
          touched={formik.touched}
          values={formik.values}
          errors={formik.errors}
        />
      ) : activeStep === 4 ? (
        <div className='create-pet-form__result-form'>
          <div>
            <SuccessIcon />
          </div>
          <Text size={32} text='Ваш питомец добавлен' />
        </div>
      ) : (
        <div className='create-pet-form__result-form'>
          <div>
            <ErrorIcon />
          </div>
          <Text size={32} text='Что-то пошло не по плану' />
        </div>
      )}
      <CreatePetFooter
        className='create-pet-form__footer'
        activeStep={activeStep}
        onBack={handlePrevForm}
        onWards={handleNextForm}
        isFormValid={formik.isValid}
      />
    </form>
  )
})
export default CreatePetForm
