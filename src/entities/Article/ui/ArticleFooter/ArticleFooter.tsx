import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from 'shared/ui/Avatar'
import { Input } from 'shared/ui/Input'
import { getUserAuthData } from 'entities/User'
import classNames from 'classnames'
import './ArticleFooter.scss'

interface ArticleFooterProps {
  className?: string
}

export const ArticleFooter = memo((props: ArticleFooterProps) => {
  const { className } = props
  const user = useSelector(getUserAuthData)
  return (
    <div className={classNames('ArticleFooter', {}, [className])}>
      <Avatar size={32} src={user?.avatar} alt={user?.username} />
      <Input className='ArticleFooter__input' width='100%' placeholder='Написать комментарий...' />
    </div>
  )
})
