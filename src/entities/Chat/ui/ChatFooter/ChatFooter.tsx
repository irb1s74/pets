import classNames from 'classnames'
import Clip from 'shared/assets/icons/clip.svg'
import Send from 'shared/assets/icons/sendIcon.svg'
import Sticker from 'shared/assets/icons/sticker.svg'
import styles from './ChatFooter.module.scss'
import { memo } from 'react'

interface ChatFooterProps {
  className?: string
}

export const ChatFooter = memo((props: ChatFooterProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.ChatFooter, {}, [className])}>
      <div className={styles.ChatFooter__icon}>
        <Clip strokeWidth='0' />
      </div>
      <div className={styles.ChatFooter__input}>
        <input placeholder='Написать сообщение...' />
      </div>
      <div className={styles.ChatFooter__groupIcon}>
        <div className={styles.ChatFooter__icon}>
          <Sticker strokeWidth='0' />
        </div>
        <div className={styles.ChatFooter__icon}>
          <Send />
        </div>
      </div>
    </div>
  )
})
