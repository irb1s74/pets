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
import styles from './SidebarMobile.module.scss'

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
    <div className={classNames(styles.nav, {}, [className])}>
      <div onClick={handleToNavigate(getRouteMain())} className={styles.nav__item}>
        <div className={styles.icon}>
          <Home />
        </div>
        <Text weight='bold' size={16} text='Home' />
      </div>
      <div onClick={handleToNavigate(getRoutePets())} className={styles.nav__item}>
        <div className={styles.icon}>
          <Pets />
        </div>
        <Text weight='bold' size={16} text='Pets' />
      </div>
      <div onClick={handleToNavigate(getRouteBlog())} className={styles.nav__item}>
        <div className={styles.icon}>
          <Blog />
        </div>
        <Text weight='bold' size={16} text='Blog' />
      </div>
      <div onClick={handleToNavigate(getRouteChat())} className={styles.nav__item}>
        <div className={styles.icon}>
          <Chat />
        </div>
        <Text weight='bold' size={16} text='Chat' />
      </div>
      <div onClick={handleToNavigate(getRouteProfile())} className={styles.nav__item}>
        <div className={styles.icon}>
          <Person />
        </div>
        <Text weight='bold' size={16} text='Person' />
      </div>
    </div>
  )
})
