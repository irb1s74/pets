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
    <div className={classNames('sidebar__nav', {}, [className])}>
      <div
        onClick={handleToNavigate(getRouteMain())}
        className={classNames('sidebar__item', {
          ['sidebar__item_active']: getRouteMain() === location,
        })}
      >
        <Home className='sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRoutePets())}
        className={classNames('sidebar__item', {
          ['sidebar__item_active']:
            getRoutePets() === location || getRoutePetDetails(id) === location,
        })}
      >
        <Pets className='sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteBlog())}
        className={classNames('sidebar__item', {
          ['sidebar__item_active']: getRouteBlog() === location,
        })}
      >
        <Blog className='sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteChat())}
        className={classNames('sidebar__item', {
          ['sidebar__item_active']: getRouteChat() === location,
        })}
      >
        <Chat className='sidebar__icon' />
      </div>
      <div
        onClick={handleToNavigate(getRouteProfile())}
        className={classNames('sidebar__item', {
          ['sidebar__item_active']: getRouteProfile() === location,
        })}
      >
        <Person className='sidebar__icon' />
      </div>
    </div>
  )
})
