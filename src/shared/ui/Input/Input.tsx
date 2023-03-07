import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean

  label?: string
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    autofocus,
    readonly,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
      <span className={'highlight'} />
      <span className={styles.bar} />
      <label>{label}</label>
    </div>
  )
})
