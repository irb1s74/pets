import { memo } from 'react'
import Pen from 'shared/assets/icons/editPen.svg'
import classNames from 'classnames'
import styles from './ChatButtonEdit.module.scss'

interface ChatButtonEditProps {
  className?: string
}

export const ChatButtonEdit = memo((props: ChatButtonEditProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatButtonEdit, {}, [className])}>
      <Pen />
    </div>
  )
})
