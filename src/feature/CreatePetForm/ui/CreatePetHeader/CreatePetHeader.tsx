import { Fragment, memo } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './CreatePetHeader.scss'

interface CreatePetHeaderProps {
  activeStep: number
  className?: string
}

export const CreatePetHeader = memo((props: CreatePetHeaderProps) => {
  const { className, activeStep } = props
  const steps = [1, 2, 3, 4]

  return (
    <div className={classNames('CreatePetHeader', {}, [className])}>
      {steps.map((value) => (
        <Fragment key={value}>
          <div
            className={classNames('CreatePetHeader__step', {
              ['CreatePetHeader__step-active']: activeStep >= value,
            })}
          >
            <Text size={16} text={`${value}`} />
          </div>
          {value !== steps.length && (
            <div className='CreatePetHeader__stepBar'>
              <div
                className={classNames('CreatePetHeader__progress', {
                  ['CreatePetHeader__progress-inProgress']: value === activeStep,
                  ['CreatePetHeader__progress-active']: activeStep > value,
                })}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
})
