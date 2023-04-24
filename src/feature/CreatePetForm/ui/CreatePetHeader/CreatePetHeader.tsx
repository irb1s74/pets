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
    <div className={classNames('create-pet-header', {}, [className])}>
      {steps.map((value) => (
        <Fragment key={value}>
          <div
            className={classNames('create-pet-header__step', {
              ['create-pet-header__step_active']: activeStep >= value,
            })}
          >
            <Text size={16} text={`${value}`} />
          </div>
          {value !== steps.length && (
            <div className='create-pet-header__step-bar'>
              <div
                className={classNames('create-pet-header__progress', {
                  ['create-pet-header__progress_in-progress']: value === activeStep,
                  ['create-pet-header__progress_active']: activeStep > value,
                })}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
})
