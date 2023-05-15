import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text'
import { AppImage } from 'shared/ui/AppImage'
import { getUserAuthData } from '../../model/selectors/getUserAuthData'
import HumanWithDog from 'shared/assets/images/HumanWithDog.png'
import BackElements from 'shared/assets/images/backGreetings.png'
import classNames from 'classnames'
import './UserGreetings.scss'

interface UserGreetingsProps {
  className?: string
}

export const UserGreetings = memo((props: UserGreetingsProps) => {
  const user = useSelector(getUserAuthData)

  const { className } = props
  return (
    <div className={classNames('user-greetings', {}, [className])}>
      <div className='user-greetings__texts'>
        <Text size={24} weight='medium' text={`С возвращением, ${user.username}`} />
        <Text
          className='user-greetings__first-recommendation'
          size={16}
          text='Не забудь покормить своего питомца'
        />
        <Text className='user-greetings__second-recommendation' size={16} text='Хорошего дня!' />
      </div>
      <AppImage inAssets={true} src={HumanWithDog} />
      <AppImage inAssets={true} className='user-greetings__background' src={BackElements} />
    </div>
  )
})
