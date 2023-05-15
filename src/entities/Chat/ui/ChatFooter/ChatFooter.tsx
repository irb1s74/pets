import { ChangeEvent, memo, KeyboardEvent, LegacyRef } from 'react'
import Clip from 'shared/assets/icons/clip.svg'
import Send from 'shared/assets/icons/sendIcon.svg'
import Sticker from 'shared/assets/icons/sticker.svg'
import classNames from 'classnames'
import './ChatFooter.scss'

interface ChatFooterProps {
  className?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClick?: () => void
  ref?: LegacyRef<HTMLDivElement>
}

export const ChatFooter = memo((props: ChatFooterProps) => {
  const { className, value, onChange, onClick, onKeyUp, ref } = props
  return (
    <div ref={ref} className={classNames('chat-footer', {}, [className])}>
      <div className='chat-footer__icon'>
        <Clip strokeWidth='0' />
      </div>
      <div className='chat-footer__input'>
        <input
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder='Написать сообщение...'
        />
      </div>
      <div className='chat-footer__group-icon'>
        <div className='chat-footer__icon'>
          <Sticker strokeWidth='0' />
        </div>
        <div onClick={onClick} className='chat-footer__icon'>
          <Send />
        </div>
      </div>
    </div>
  )
})
