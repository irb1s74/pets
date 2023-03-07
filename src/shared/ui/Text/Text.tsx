import { memo } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  className?: string;
  title?: string
  text?: string;
  align?: string;
  size?: number;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    align = 'left',
    size = '14',
  } = props
  return (
    <div className={classNames(styles.Text, {}, [className])}>
      {title && (
        <h2
        >
          {title}
        </h2>
      )}
      {text && (
        <p style={{ fontSize: `${size}px`}}>
          {text}
        </p>
      )}
    </div>
  )
})
