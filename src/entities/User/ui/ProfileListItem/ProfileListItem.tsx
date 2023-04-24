import { memo, ReactNode } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './ProfileListItem.scss'

interface ProfileListItemProps {
  name: string
  icon: ReactNode
  onClick: () => void
  active: boolean
  className?: string
}

export const ProfileListItem = memo((props: ProfileListItemProps) => {
  const { className, icon, name, onClick, active } = props

  const mod = {
    ['profile-list-item_active']: active,
  }

  return (
    <div onClick={onClick} className={classNames('profile-list-item', mod, [className])}>
      <div
        className={classNames('profile-list-item__icon', {
          ['profile-list-item__icon_active']: active,
        })}
      >
        {icon}
      </div>
      <Text
        className={classNames('profile-list-item__name', {
          ['profile-list-item__name_active']: active,
        })}
        size={18}
        weight='bold'
        text={name}
      />
    </div>
  )
})
