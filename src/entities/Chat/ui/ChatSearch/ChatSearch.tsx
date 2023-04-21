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
    <div className={classNames('ChatSearch', {}, [className])}>
      <div className='ChatSearch__icon'>
        <SearchIcon />
      </div>
      <div className='ChatSearch__input'>
        <input placeholder='Поиск...' />
      </div>
    </div>
  )
})
