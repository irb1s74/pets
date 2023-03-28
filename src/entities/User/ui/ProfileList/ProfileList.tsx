import { memo } from 'react'
import PetsIcon from 'shared/assets/icons/yourPets.svg'
import Setting from 'shared/assets/icons/setting.svg'
import AccountIcon from 'shared/assets/icons/account.svg'
import { ProfileListItem } from '../../ui/ProfileListItem/ProfileListItem'
import classNames from 'classnames'
import styles from './ProfileList.module.scss'

interface ProfileListProps {
  selectedForm: string
  handleSelectForm: (form: string) => () => void
  className?: string
}

export const ProfileList = memo((props: ProfileListProps) => {
  const { className, handleSelectForm, selectedForm } = props
  return (
    <div className={classNames(styles.ProfileList, {}, [className])}>
      <ProfileListItem
        active={selectedForm === 'account'}
        icon={<AccountIcon />}
        name='Аккаунт'
        onClick={handleSelectForm('account')}
      />
      <ProfileListItem
        active={selectedForm === 'setting'}
        onClick={handleSelectForm('setting')}
        icon={<Setting />}
        name='Настройки'
      />
      <ProfileListItem
        active={selectedForm === 'pets'}
        onClick={handleSelectForm('pets')}
        icon={<PetsIcon />}
        name='Ваши питомцы'
      />
    </div>
  )
})
