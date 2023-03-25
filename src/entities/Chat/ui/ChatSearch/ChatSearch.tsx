import { memo } from 'react'
import SearchIcon from 'shared/assets/icons/search.svg'
import classNames from 'classnames'
import styles from './ChatSearch.module.scss'

interface ChatSearchProps {
  className?: string
}

export const ChatSearch = memo((props: ChatSearchProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatSearch, {}, [className])}>
      <div className={styles.ChatSearch__icon}>
        <SearchIcon />
      </div>
      <div className={styles.ChatSearch__input}>
        <input placeholder='Поиск...' />
      </div>
    </div>
  )
})
