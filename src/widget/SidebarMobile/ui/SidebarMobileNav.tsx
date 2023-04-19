import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getRouteBlog,
  getRouteChat,
  getRouteMain,
  getRoutePets,
  getRouteProfile,
} from 'shared/const/router'
import { Text } from 'shared/ui/Text'
import Home from 'shared/assets/icons/home.svg'
import Pets from 'shared/assets/icons/pets.svg'
import Blog from 'shared/assets/icons/blog.svg'
import Chat from 'shared/assets/icons/chat.svg'
import Person from 'shared/assets/icons/person.svg'
import classNames from 'classnames'
import './SidebarMobile.scss'

interface Props {
  handleCloseMenu?: () => void
  className?: string
}

export const SidebarMobileNav = memo((props: Props) => {
  const { className, handleCloseMenu } = props
  const navigate = useNavigate()
  const handleToNavigate = (path: string) => () => {
    handleCloseMenu()
    navigate(path)
  }

  return (
    <div className={classNames('SidebarMobile__nav', {}, [className])}>
      <div onClick={handleToNavigate(getRouteMain())} className='SidebarMobile__item'>
        <div className='SidebarMobile__itemIcon'>
          <Home />
        </div>
        <Text weight='bold' size={16} text='Home' />
      </div>
      <div onClick={handleToNavigate(getRoutePets())} className='SidebarMobile__item'>
        <div className='SidebarMobile__itemIcon'>
          <Pets />
        </div>
        <Text weight='bold' size={16} text='Pets' />
      </div>
      <div onClick={handleToNavigate(getRouteBlog())} className='SidebarMobile__item'>
        <div className='SidebarMobile__itemIcon'>
          <Blog />
        </div>
        <Text weight='bold' size={16} text='Blog' />
      </div>
      <div onClick={handleToNavigate(getRouteChat())} className='SidebarMobile__item'>
        <div className='SidebarMobile__itemIcon'>
          <Chat />
        </div>
        <Text weight='bold' size={16} text='Chat' />
      </div>
      <div onClick={handleToNavigate(getRouteProfile())} className='SidebarMobile__item'>
        <div className='SidebarMobile__itemIcon'>
          <Person />
        </div>
        <Text weight='bold' size={16} text='Person' />
      </div>
    </div>
  )
})
