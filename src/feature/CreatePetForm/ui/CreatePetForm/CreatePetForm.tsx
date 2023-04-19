import { memo, useCallback, useState } from 'react'
import { AboutPetForm, PetCharacteristicsForm, PetPhotoForm } from 'entities/Pet'
import { Text } from 'shared/ui/Text'
import SuccessIcon from 'shared/assets/icons/successIcon.svg'
import { CreatePetHeader } from '../CreatePetHeader/CreatePetHeader'
import { CreatePetFooter } from '../CreatePetFooter/CreatePetFooter'
import classNames from 'classnames'
import './CreatePetForm.scss'

interface CreatePetFormProps {
  className?: string
}

const CreatePetForm = memo((props: CreatePetFormProps) => {
  const { className } = props
  const [activeStep, setStep] = useState(1)

  const handleNextForm = useCallback(() => setStep((prevState) => prevState + 1), [])
  const handlePrevForm = useCallback(() => setStep((prevState) => prevState - 1), [])

  return (
    <div className={classNames('CreatePetForm', {}, [className])}>
      <CreatePetHeader activeStep={activeStep} />
      {activeStep === 1 ? (
        <AboutPetForm />
      ) : activeStep === 2 ? (
        <PetPhotoForm />
      ) : activeStep === 3 ? (
        <PetCharacteristicsForm />
      ) : (
        <div className='CreatePetForm__resultForm'>
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
