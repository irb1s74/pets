import { ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'


export enum ButtonTheme {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: string;
  size?: string;
  isLoading?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    size = ButtonSize.large,
    variant = ButtonTheme.primary,
    isLoading,
    ...otherProps
  } = props

  const mods = {
    [styles[size]]: true,
    [styles[variant]]: true,
    [styles.loading]: isLoading,
  }

  return (
    <button
      type='button'
      className={classNames(styles.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {isLoading ? (<span className={styles.loader} />) : children}
    </button>
  )
})
