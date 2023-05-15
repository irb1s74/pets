import { Suspense, useCallback, useState } from 'react'
import { ProfileList } from 'entities/User'
import { AccountForm } from 'feature/AccountForm'
import { SettingsForm } from 'feature/SettingsForm'
import { CreatePetForm } from 'feature/CreatePetForm'
import classNames from 'classnames'
import './ProfilePage.scss'

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
    <div className={classNames('profile-page', {}, [className])}>
      <ProfileList
        className='profile-page__menu'
        selectedForm={form}
        handleSelectForm={handleSelectForm}
      />
      {form === 'account' ? (
        <AccountForm className='profile-page__account-form' />
      ) : form === 'setting' ? (
        <SettingsForm className='profile-page__setting-form' />
      ) : (
        <Suspense fallback=''>
          <CreatePetForm className='profile-page__create-pet-form' />
        </Suspense>
      )}
    </div>
  )
}
export default ProfilePage
