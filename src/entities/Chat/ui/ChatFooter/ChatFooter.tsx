import { memo } from 'react'
import Clip from 'shared/assets/icons/clip.svg'
import Send from 'shared/assets/icons/sendIcon.svg'
import Sticker from 'shared/assets/icons/sticker.svg'
import classNames from 'classnames'
import './ChatFooter.scss'

interface ChatFooterProps {
  className?: string
}

export const ChatFooter = memo((props: ChatFooterProps) => {
  const { className } = props
  return (
    <div className={classNames('ChatFooter', {}, [className])}>
      <div className='ChatFooter__icon'>
        <Clip strokeWidth='0' />
      </div>
      <div className='ChatFooter__input'>
        <input placeholder='Написать сообщение...' />
      </div>
      <div className='ChatFooter__groupIcon'>
        <div className='ChatFooter__icon'>
          <Sticker strokeWidth='0' />
        </div>
        <div className='ChatFooter__icon'>
          <Send />
        </div>
      </div>
    </div>
  )
})
