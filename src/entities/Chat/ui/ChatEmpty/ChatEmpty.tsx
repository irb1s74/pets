import { memo } from 'react'
import Chats from 'shared/assets/icons/chats.svg'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './ChatEmpty.scss'

interface ChatEmptyProps {
  className?: string
}

export const ChatEmpty = memo((props: ChatEmptyProps) => {
  const { className } = props
  return (
    <div className={classNames('ChatEmpty', {}, [className])}>
      <div className='ChatEmpty__icon'>
        <Chats />
      </div>
      <div className='ChatEmpty__text'>
        <Text align='center' size={18} text='Выберите чат или' />
        <Text weight='bold' align='center' size={18} text='создайте новую беседу' />
      </div>
    </div>
  )
})
