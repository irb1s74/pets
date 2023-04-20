import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import './Switch.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface SwitchProps extends HTMLInputProps {
  className?: string
}

export const Switch = memo((props: SwitchProps) => {
  const { className, ...otherProps } = props
  return (
    <label className={classNames('Switch', {}, [className])}>
      <input type='checkbox' {...otherProps} />
      <span />
    </label>
  )
})
