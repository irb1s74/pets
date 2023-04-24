import { memo } from 'react'
import Pen from 'shared/assets/icons/editPen.svg'
import classNames from 'classnames'
import './ChatButtonEdit.scss'

interface ChatButtonEditProps {
  active?: boolean
  onClick?: () => void
  className?: string
}

export const ChatButtonEdit = memo((props: ChatButtonEditProps) => {
  const { className, onClick, active } = props
  const mod = {
    ['chat-button-edit_active']: active,
  }
  return (
    <div onClick={onClick} className={classNames('chat-button-edit', mod, [className])}>
      <Pen />
    </div>
  )
})
