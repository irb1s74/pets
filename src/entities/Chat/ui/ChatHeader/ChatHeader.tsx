import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import Arrow from 'shared/assets/icons/leftArrow.svg'
import Trash from 'shared/assets/icons/trash.svg'
import classNames from 'classnames'
import './ChatHeader.scss'

interface ChatHeaderProps {
  title: string
  handleSetMenu?: () => void
  className?: string
}

export const ChatHeader = memo((props: ChatHeaderProps) => {
  const { className, title, handleSetMenu } = props
  return (
    <div className={classNames('chat-header', {}, [className])}>
      <div className='chat-header__title'>
        <div onClick={handleSetMenu} className='chat-header__arrow'>
          <Arrow />
        </div>
        <Text weight='bold' size={16} text={title} className='chat-header__text' />
      </div>
      <div className='chat-header__icon-btn'>
        <Trash />
      </div>
    </div>
  )
})
