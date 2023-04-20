import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Logo } from 'shared/ui/Logo'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink'
import { getRouteLogin, getRouteMain, getRouteSignUp } from 'shared/const/router'
import './StartPage.scss'

const StartPage = () => {
  const user = useSelector(getUserAuthData)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(getRouteLogin())
  }

  useEffect(() => {
    if (user) {
      navigate(getRouteMain())
    }
  }, [navigate, user])

  return (
    <div className='StartPage'>
      <div className='StartPage__wrapper'>
        <Logo size='large' />
        <Text className='StartPage__name' text='Pets' size={34} weight='bold' />
        <Text
          className='StartPage__description'
          text='Лапки. Ушки. Хвостик и доза любви'
          size={20}
          weight='medium'
          align='center'
        />
        <Button onClick={handleClick}>Войти</Button>
        <Text className='StartPage__question' text='У вас ещё нет аккаунта?' size={18} />
        <AppLink to={getRouteSignUp()}>
          <Text
            className='StartPage__linkToSigIn'
            text='Зарегистрироваться'
            size={18}
            weight='bold'
          />
        </AppLink>
      </div>
    </div>
  )
}
export default StartPage
