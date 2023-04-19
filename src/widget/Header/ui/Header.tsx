import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SidebarMobile } from 'widget/SidebarMobile'
import { ThemeSwitcher } from 'feature/ThemeSwitcher'
import { NotificationButton } from 'feature/NotificationButton'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import Arrow from 'shared/assets/icons/headerArrow.svg'
import classNames from 'classnames'
import './Header.scss'

interface HeaderProps {
  className?: string
  useGoBack?: boolean
  pageTitle?: string
}

export const Header = (props: HeaderProps) => {
  const { className, pageTitle, useGoBack } = props
  const user = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  const { width } = useWindowDimensions()

  return (
    <header className={classNames('Header', {}, [className])}>
      {width > 768 ? (
        <div className='Header__title'>
          {useGoBack && (
            <div onClick={handleGoBack} className='Header__arrow'>
              <Arrow />
            </div>
          )}
          <Text size={40} weight='bold' text={pageTitle} />
        </div>
      ) : (
        <SidebarMobile />
      )}
      <div className='Header__actions'>
        <ThemeSwitcher className='Header__switcher' />
        <NotificationButton className='Header__alertBtn' />
        <Avatar size={45} src={user?.avatar} alt={user?.username} online={true} />
      </div>
    </header>
  )
}
