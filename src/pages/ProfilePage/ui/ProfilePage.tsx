import classNames from 'classnames'
import { Page } from 'widget/Page'
import styles from './ProfilePage.module.scss'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props
  return (
    <Page title='Профиль'>
      <div className={classNames(styles.ProfilePage, {}, [className])}></div>
    </Page>
  )
}
export default ProfilePage
