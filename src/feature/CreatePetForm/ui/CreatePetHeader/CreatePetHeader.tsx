import { Fragment, memo } from 'react'
import classNames from 'classnames'
import styles from './CreatePetHeader.module.scss'
import { Text } from 'shared/ui/Text'

interface CreatePetHeaderProps {
  activeStep: number
  className?: string
}

export const CreatePetHeader = memo((props: CreatePetHeaderProps) => {
  const { className, activeStep } = props
  const steps = [1, 2, 3, 4]

  return (
    <div className={classNames(styles.CreatePetHeader, {}, [className])}>
      {steps.map((value) => (
        <Fragment key={value}>
          <div
            className={classNames(styles.CreatePetHeader__step, {
              [styles.CreatePetHeader__stepActive]: activeStep >= value,
            })}
          >
            <Text size={16} text={`${value}`} />
          </div>
          {value !== steps.length && (
            <div className={styles.CreatePetHeader__stepBar}>
              <div
                className={classNames(styles.progress, {
                  [styles.progressInProgress]: value === activeStep,
                  [styles.progressActive]: activeStep > value,
                })}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
})
