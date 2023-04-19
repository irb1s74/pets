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
    <div className={classNames('ChatHeader', {}, [className])}>
      <div className='ChatHeader__title'>
        <div onClick={handleSetMenu} className='ChatHeader__arrow'>
          <Arrow />
        </div>
        <Text weight='bold' size={16} text={title} className='ChatHeader__text' />
      </div>
      <div className='ChatHeader__iconBtn'>
        <Trash />
      </div>
    </div>
  )
})
