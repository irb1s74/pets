import { ButtonHTMLAttributes, memo } from 'react'
import classNames from 'classnames'
import './Button.scss'

export enum ButtonTheme {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: string
  size?: string
  isLoading?: boolean
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
    [size]: true,
    [variant]: true,
    ['Button-loading']: isLoading,
  }

  return (
    <button
      type='button'
      className={classNames('Button', mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {isLoading ? <span className='loader' /> : children}
    </button>
  )
})
