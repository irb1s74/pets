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
    [`button_${size}`]: true,
    [`button_${variant}`]: true,
    ['button_loading']: isLoading,
  }

  return (
    <button className={classNames('button', mods, [className])} disabled={disabled} {...otherProps}>
      {isLoading ? <span className='button__loader' /> : children}
    </button>
  )
})
