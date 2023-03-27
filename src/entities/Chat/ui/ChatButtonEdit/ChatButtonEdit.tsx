import { memo } from 'react'
import Pen from 'shared/assets/icons/editPen.svg'
import classNames from 'classnames'
import styles from './ChatButtonEdit.module.scss'

interface ChatButtonEditProps {
  active?: boolean
  onClick?: () => void
  className?: string
}

export const ChatButtonEdit = memo((props: ChatButtonEditProps) => {
  const { className, onClick, active } = props
  const mod = {
    [styles.active]: active,
  }
  return (
    <div onClick={onClick} className={classNames(styles.ChatButtonEdit, mod, [className])}>
      <Pen />
    </div>
  )
})
