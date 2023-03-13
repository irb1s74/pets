import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  getRouteBlog,
  getRouteChat,
  getRouteMain,
  getRoutePets,
  getRouteProfile,
} from 'shared/const/router'
import Home from 'shared/assets/icons/home.svg'
import Pets from 'shared/assets/icons/pets.svg'
import Blog from 'shared/assets/icons/blog.svg'
import Chat from 'shared/assets/icons/chat.svg'
import Person from 'shared/assets/icons/person.svg'
import styles from './Sidebar.module.scss'
import classNames from 'classnames'

interface SidebarNavProps {
  className?: string
}

export const SidebarNav = memo((props: SidebarNavProps) => {
  const { className } = props
  const navigate = useNavigate()
  const location = useLocation().pathname
  const handleToNavigate = (path: string) => () => {
    navigate(path)
  }

  return (
    <div className={classNames(styles.Sidebar__nav, {}, [className])}>
      <div
        onClick={handleToNavigate(getRouteMain())}
        className={classNames(styles.item, { [styles.itemActive]: getRouteMain() === location })}
      >
        <Home className={styles.item__icon} />
      </div>
      <div
        onClick={handleToNavigate(getRoutePets())}
        className={classNames(styles.item, { [styles.itemActive]: getRoutePets() === location })}
      >
        <Pets className={styles.item__icon} />
      </div>
      <div
        onClick={handleToNavigate(getRouteBlog())}
        className={classNames(styles.item, { [styles.itemActive]: getRouteBlog() === location })}
      >
        <Blog className={styles.item__icon} />
      </div>
      <div
        onClick={handleToNavigate(getRouteChat())}
        className={classNames(styles.item, { [styles.itemActive]: getRouteChat() === location })}
      >
        <Chat className={styles.item__icon} />
      </div>
      <div
        onClick={handleToNavigate(getRouteProfile())}
        className={classNames(styles.item, { [styles.itemActive]: getRouteProfile() === location })}
      >
        <Person className={styles.item__icon} />
      </div>
    </div>
  )
})
