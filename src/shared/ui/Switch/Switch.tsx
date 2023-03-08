import { InputHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import styles from './Switch.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange' | 'readOnly'
>;

interface SwitchProps extends HTMLInputProps {
  className?: string
}

export const Switch = memo((props: SwitchProps) => {
  const {
    className,
    ...otherProps
  } = props
  return (
    <label className={classNames(styles.Switch, {}, [className])}>
      <input type='checkbox' {...otherProps} />
      <span />
    </label>
  )
})
