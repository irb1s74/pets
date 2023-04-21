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
    ['ProfileListItem-active']: active,
  }

  return (
    <div onClick={onClick} className={classNames('ProfileListItem', mod, [className])}>
      <div
        className={classNames('ProfileListItem__icon', {
          ['ProfileListItem__icon-active']: active,
        })}
      >
        {icon}
      </div>
      <Text
        className={classNames('ProfileListItem__name', {
          ['ProfileListItem__name-active']: active,
        })}
        size={18}
        weight='bold'
        text={name}
      />
    </div>
  )
})
