import classNames from 'classnames'
import styles from './Card.module.scss'
import { memo, ReactNode } from 'react'

interface CardProps {
  className?: string

  children: ReactNode
}

export const Card = memo((props: CardProps) => {
  const { className, children } = props
  return <div className={classNames(styles.Card, {}, [className])}>{children}</div>
})
