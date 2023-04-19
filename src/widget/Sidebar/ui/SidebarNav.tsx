import { memo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  getRouteBlog,
  getRouteChat,
  getRouteMain,
  getRoutePetDetails,
  getRoutePets,
  getRouteProfile,
} from 'shared/const/router'
import Home from 'shared/assets/icons/home.svg'
import Pets from 'shared/assets/icons/pets.svg'
import Blog from 'shared/assets/icons/blog.svg'
import Chat from 'shared/assets/icons/chat.svg'
import Person from 'shared/assets/icons/person.svg'
import classNames from 'classnames'
import './Sidebar.scss'

interface SidebarNavProps {
  className?: string
}

export const SidebarNav = memo((props: SidebarNavProps) => {
  const { className } = props
  const navigate = useNavigate()
  const location = useLocation().pathname
  const { id } = useParams<{ id: string }>()
  const handleToNavigate = (path: string) => () => {
    navigate(path)
  }

  return (
    <div className={classNames('Sidebar__nav', {}, [className])}>
      <div
        onClick={handleToNavigate(getRouteMain())}
        className={classNames('Sidebar__item', {
          'Sidebar__item-active': getRouteMain() === location,
        })}
      >
        <Home className='Sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRoutePets())}
        className={classNames('Sidebar__item', {
          'Sidebar__item-active':
            getRoutePets() === location || getRoutePetDetails(id) === location,
        })}
      >
        <Pets className='Sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteBlog())}
        className={classNames('Sidebar__item', {
          'Sidebar__item-active': getRouteBlog() === location,
        })}
      >
        <Blog className='Sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteChat())}
        className={classNames('Sidebar__item', {
          'Sidebar__item-active': getRouteChat() === location,
        })}
      >
        <Chat className='Sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteProfile())}
        className={classNames('Sidebar__item', {
          'Sidebar__item-active': getRouteProfile() === location,
        })}
      >
        <Person className='Sidebar__icon' />
      </div>
    </div>
  )
})
