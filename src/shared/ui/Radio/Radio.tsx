import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import './Radio.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface RadioProps extends HTMLInputProps {
  className?: string
}

export const Radio = memo((props: RadioProps) => {
  const { className, ...otherProps } = props
  return (
    <label className={classNames('Radio', {}, [className])}>
      <input type='radio' {...otherProps} />
      <span />
    </label>
  )
})
