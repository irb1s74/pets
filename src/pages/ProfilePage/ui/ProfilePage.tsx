import classNames from 'classnames'
import styles from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  return <div className={classNames(styles.ProfilePage, {}, [className])}></div>
}
export default ProfilePage
