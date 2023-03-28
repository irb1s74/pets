import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import styles from './Radio.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface RadioProps extends HTMLInputProps {
  className?: string
}

export const Radio = memo((props: RadioProps) => {
  const { className, ...otherProps } = props
  return (
    <label className={classNames(styles.Radio, {}, [className])}>
      <input type='radio' {...otherProps} />
      <span />
    </label>
  )
})
