import styles from './StartPage.module.scss'
import { Logo } from 'shared/ui/Logo'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink'

const StartPage = () => {
  return (
    <div className={styles.StartPage}>
      <div className={styles.StartPage__wrapper}>
        <Logo size='large' />
        <Text className={styles.name} text='Pets' size={34} weight='bold' />
        <Text
          className={styles.description}
          text='Лапки. Ушки. Хвостик и доза любви'
          size={20}
          weight='medium'
          align='center'
        />
        <Button>Войти</Button>
        <Text className={styles.question} text='У вас ещё нет аккаунта?' size={18} />
        <AppLink to='auth'>
          <Text className={styles.linkToSigIn} text='Зарегистрироваться' size={18} weight='bold' />
        </AppLink>
      </div>
    </div>
  )
}
export default StartPage
