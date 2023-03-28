import { ReactNode } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import styles from './ProfileListItem.module.scss'

interface ProfileListItemProps {
  name: string
  icon: ReactNode
  onClick: () => void
  active: boolean
  className?: string
}

export const ProfileListItem = (props: ProfileListItemProps) => {
  const { className, icon, name, onClick, active } = props

  const mod = {
    [styles.ProfileListItemActive]: active,
  }

  return (
    <div onClick={onClick} className={classNames(styles.ProfileListItem, mod, [className])}>
      <div
        className={classNames(styles.ProfileListItem__icon, {
          [styles.ProfileListItem__iconActive]: active,
        })}
      >
        {icon}
      </div>
      <Text
        className={classNames(styles.ProfileListItem__name, {
          [styles.ProfileListItem__nameActive]: active,
        })}
        size={18}
        weight='bold'
        text={name}
      />
    </div>
  )
}
