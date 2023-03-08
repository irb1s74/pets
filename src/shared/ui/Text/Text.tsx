import { memo } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  className?: string
  color?: string
  title?: string
  text?: string
  align?: string
  size?: number
}

export const Text = memo((props: TextProps) => {
  const { className, color = 'default', text, title, align = 'left', size = '14' } = props

  const mods = {
    [styles[align]]: true,
    [styles[color]]: true,
  }

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <h2>{title}</h2>}
      {text && <p style={{ fontSize: `${size}px` }}>{text}</p>}
    </div>
  )
})
