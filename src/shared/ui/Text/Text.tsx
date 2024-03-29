import { memo } from 'react'
import classNames from 'classnames'
import './Text.scss'

interface TextProps {
  className?: string
  color?: string
  title?: string
  text?: string
  align?: string
  weight?: string
  size?: number
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    color = 'default',
    text,
    title,
    align = 'left',
    size = '14',
    weight = 'normal',
  } = props

  const mods = {
    [`text_${align}`]: true,
    [`text_${color}`]: true,
    [`text_${weight}`]: true,
  }

  return (
    <div className={classNames('text', mods, [className])}>
      {title && <h2>{title}</h2>}
      {text && <p style={{ fontSize: `${size}px` }}>{text}</p>}
    </div>
  )
})
