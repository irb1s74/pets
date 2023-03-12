import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  autofocus?: boolean
  label?: string
  readonly?: boolean
  success?: boolean
  error?: boolean
  helperText?: string
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
    error,
    helperText,
    success,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>(null)
  const mods = {
    [styles.invalid]: error,
    [styles.success]: success,
  }

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(styles.Input, mods, [className])}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        placeholder=' '
        {...otherProps}
      />
      <span className={styles.bar} />
      <label className={styles.label}>{label}</label>
      <Text className={styles.errorText} text={helperText} color='danger' align='right' size={8} />
    </div>
  )
})
