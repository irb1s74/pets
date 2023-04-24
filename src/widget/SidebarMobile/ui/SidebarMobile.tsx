import { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { Portal } from 'shared/ui/Portal'
import { Text } from 'shared/ui/Text'
import Logout from 'shared/assets/icons/logout.svg'
import Close from 'shared/assets/icons/largeClose.svg'
import { SidebarMobileNav } from './SidebarMobileNav'
import classNames from 'classnames'
import './SidebarMobile.scss'

interface SidebarMobileProps {
  className?: string
}

export const SidebarMobile = memo((props: SidebarMobileProps) => {
  const { className } = props
  const dispatch = useDispatch()
  const [isCollapsed, setCollapsed] = useState(false)

  const handleOpenMenu = () => {
    setCollapsed(true)
  }
  const handleCloseMenu = useCallback(() => setCollapsed(false), [])
  const handleLogout = () => {
    dispatch(userActions.logout())
  }

  const mod = {
    ['sidebar-mobile__menu-open']: isCollapsed,
  }
  return (
    <div className={classNames('sidebar-mobile', {}, [className])}>
      <div onClick={handleOpenMenu} className='sidebar-mobile__btn'>
        <div className='sidebar-mobile__bar' />
        <div className='sidebar-mobile__bar' />
        <div className='sidebar-mobile__bar' />
      </div>
      <Portal>
        <div className={classNames('sidebar-mobile__menu', mod)}>
          <div onClick={handleCloseMenu} className='sidebar-mobile__close-btn'>
            <Close />
          </div>
          <SidebarMobileNav handleCloseMenu={handleCloseMenu} />
          <div onClick={handleLogout} className='sidebar-mobile__logout'>
            <div className='sidebar-mobile__icon'>
              <Logout />
            </div>
            <Text size={16} weight='Bold' text='Logout' />
          </div>
        </div>
      </Portal>
    </div>
  )
})
