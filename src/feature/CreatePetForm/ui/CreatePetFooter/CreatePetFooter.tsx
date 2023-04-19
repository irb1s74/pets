import { memo } from 'react'
import { Button } from 'shared/ui/Button'
import classNames from 'classnames'
import './CreatePetFooter.scss'

interface CreatePetFooterProps {
  activeStep: number
  onWards: () => void
  onBack: () => void
  className?: string
}

export const CreatePetFooter = memo((props: CreatePetFooterProps) => {
  const { className, onWards, activeStep, onBack } = props

  return (
    <div className={classNames('CreatePetFooter', {}, [className])}>
      {activeStep > 1 && activeStep < 4 && (
        <Button onClick={onBack} className='CreatePetFooter__btn'>
          Назад
        </Button>
      )}
      <Button
        className={classNames('CreatePetFooter__btn', {
          ['CreatePetFooter__btn-right']: activeStep < 3,
          ['CreatePetFooter__btn-auto']: activeStep > 3,
        })}
        onClick={onWards}
      >
        {activeStep < 3 ? 'Далее' : activeStep === 3 ? 'Добавить' : 'Завершить'}
      </Button>
    </div>
  )
})
