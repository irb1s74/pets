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
    <div className={classNames('UserGreetings', {}, [className])}>
      <div className='UserGreetings__texts'>
        <Text size={24} weight='medium' text={`С возвращением, ${user.username}`} />
        <Text
          className='UserGreetings__firstRecommendation'
          size={16}
          text='Не забудь покормить своего питомца'
        />
        <Text className='UserGreetings__secondRecommendation' size={16} text='Хорошего дня!' />
      </div>
      <AppImage src={HumanWithDog} />
      <AppImage className='UserGreetings__background' src={BackElements} />
    </div>
  )
})
