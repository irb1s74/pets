import classNames from 'classnames'
import styles from './CreatePetFooter.module.scss'
import { memo } from 'react'
import { Button } from 'shared/ui/Button'

interface CreatePetFooterProps {
  onWards: () => void
  className?: string
}

export const CreatePetFooter = memo((props: CreatePetFooterProps) => {
  const { className, onWards } = props
  return (
    <div className={classNames(styles.CreatePetFooter, {}, [className])}>
      <Button onClick={onWards}>Далее</Button>
    </div>
  )
})
