import { memo, ReactNode } from 'react'
import classNames from 'classnames'
import './Card.scss'

interface CardProps {
  className?: string
  children: ReactNode
}

export const Card = memo((props: CardProps) => {
  const { className, children } = props
  return <div className={classNames('card', {}, [className])}>{children}</div>
})
