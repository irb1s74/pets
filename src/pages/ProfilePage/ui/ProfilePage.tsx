import classNames from 'classnames'
import styles from './ProfilePage.module.scss'
import { ProfileList } from 'entities/User'
import { useCallback, useState } from 'react'
import { AccountForm } from 'feature/AccountForm'
import { SettingsForm } from 'feature/SettingsForm'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props

  const [form, setForm] = useState('account')

  const handleSelectForm = useCallback(
    (form: string) => () => {
      setForm(form)
    },
    [],
  )

  return (
    <div className={classNames(styles.ProfilePage, {}, [className])}>
      <ProfileList
        className={styles.ProfilePage__menu}
        selectedForm={form}
        handleSelectForm={handleSelectForm}
      />
      {form === 'account' ? <AccountForm /> : form === 'setting' ? <SettingsForm /> : <div />}
    </div>
  )
}
export default ProfilePage
