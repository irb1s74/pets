import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { Logo } from 'shared/ui/Logo'
import Logout from 'shared/assets/icons/logout.svg'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import { SidebarNav } from './SidebarNav'
import classNames from 'classnames'
import './Sidebar.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const dispatch = useDispatch()

  const { width } = useWindowDimensions()
  const handleLogout = () => {
    dispatch(userActions.logout())
  }

  if (width <= 768) {
    return null
  }

  return (
    <div className={classNames('Sidebar', {}, [className])}>
      <Logo className='Sidebar__logo' />
      <SidebarNav />
      <div onClick={handleLogout} className='Sidebar__logoutBtn'>
        <Logout />
      </div>
    </div>
  )
})
