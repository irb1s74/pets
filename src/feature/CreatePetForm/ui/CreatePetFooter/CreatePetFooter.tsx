import { memo } from 'react'
import { Button } from 'shared/ui/Button'
import classNames from 'classnames'
import './CreatePetFooter.scss'

interface CreatePetFooterProps {
  activeStep: number
  onWards: () => void
  onBack: () => void
  className?: string
  isFormValid?: boolean
}

export const CreatePetFooter = memo((props: CreatePetFooterProps) => {
  const { className, onWards, activeStep, onBack, isFormValid } = props
  return (
    <div className={classNames('create-pet-footer', {}, [className])}>
      {activeStep > 1 && activeStep < 4 && (
        <Button onClick={onBack} className='create-pet-footer__btn'>
          Назад
        </Button>
      )}
      {activeStep === 3 ? (
        <Button
          type='submit'
          disabled={!isFormValid}
          className={classNames('create-pet-footer__btn', {
            ['create-pet-footer__btn_right']: activeStep < 3,
            ['create-pet-footer__btn_auto']: activeStep > 3,
          })}
        >
          {!isFormValid ? 'Форма не заполнена' : 'Отправить'}
        </Button>
      ) : (
        <Button
          type={activeStep === 3 ? 'submit' : 'button'}
          className={classNames('create-pet-footer__btn', {
            ['create-pet-footer__btn_right']: activeStep < 3,
            ['create-pet-footer__btn_auto']: activeStep > 3,
          })}
          onClick={onWards}
        >
          {activeStep < 3 ? 'Далее' : 'Завершить'}
        </Button>
      )}
    </div>
  )
})
