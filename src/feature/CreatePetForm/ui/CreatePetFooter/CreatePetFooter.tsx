import classNames from 'classnames'
import styles from './CreatePetFooter.module.scss'
import { memo } from 'react'
import { Button } from 'shared/ui/Button'

interface CreatePetFooterProps {
  activeStep: number
  onWards: () => void
  onBack: () => void
  className?: string
}

export const CreatePetFooter = memo((props: CreatePetFooterProps) => {
  const { className, onWards, activeStep, onBack } = props

  return (
    <div className={classNames(styles.CreatePetFooter, {}, [className])}>
      {activeStep > 1 && activeStep < 4 && (
        <Button onClick={onBack} className={styles.CreatePetFooter__btn}>
          Назад
        </Button>
      )}
      <Button
        className={classNames(styles.CreatePetFooter__btn, {
          [styles.mlA]: activeStep < 3,
          [styles.mA]: activeStep > 3,
        })}
        onClick={onWards}
      >
        {activeStep < 3 ? 'Далее' : activeStep === 3 ? 'Добавить' : 'Завершить'}
      </Button>
    </div>
  )
})
