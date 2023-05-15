import { ChangeEvent, memo } from 'react'
import SearchIcon from 'shared/assets/icons/search.svg'
import classNames from 'classnames'
import './ChatSearch.scss'

interface ChatSearchProps {
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ChatSearch = memo((props: ChatSearchProps) => {
  const { className, onChange } = props

  return (
    <div className={classNames('chat-search', {}, [className])}>
      <div className='chat-search__icon'>
        <SearchIcon />
      </div>
      <div className='chat-search__input'>
        <input onChange={onChange} placeholder='Поиск...' />
      </div>
    </div>
  )
})
