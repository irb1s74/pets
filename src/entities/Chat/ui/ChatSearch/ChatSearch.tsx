import { memo } from 'react'
import SearchIcon from 'shared/assets/icons/search.svg'
import classNames from 'classnames'
import './ChatSearch.scss'

interface ChatSearchProps {
  className?: string
}

export const ChatSearch = memo((props: ChatSearchProps) => {
  const { className } = props
  return (
    <div className={classNames('chat-search', {}, [className])}>
      <div className='chat-search__icon'>
        <SearchIcon />
      </div>
      <div className='chat-search__input'>
        <input placeholder='Поиск...' />
      </div>
    </div>
  )
})
