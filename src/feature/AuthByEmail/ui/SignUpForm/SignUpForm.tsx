import { memo } from 'react'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { AppLink } from 'shared/ui/AppLink'
import { Button } from 'shared/ui/Button'
import { getRouteLogin } from 'shared/const/router'
import classNames from 'classnames'
import styles from './SignUpForm.module.scss'

interface SignUpFormProps {
  className?: string
}

const SignUpForm = memo(({ className }: SignUpFormProps) => {
  return (
    <div className={classNames(styles.SignUpForm, {}, [className])}>
      <form className={styles.SignUpForm__form}>
        <Logo size='medium' />
        <Text className={styles.SignUpForm__title} size={30} weight='medium' text='Регистрация' />
        <Text
          className={styles.SignUpForm__subtitle}
          size={18}
          text='Зарегистрируйтесь сейчас бесплатно и добавьте своего питомца'
        />
        <Input className={styles.SignUpForm__input} type='email' label='Почта' />
        <Input className={styles.SignUpForm__input} type='string' label='Никнэйм' />
        <Input className={styles.SignUpForm__input} type='password' label='Пароль' />
        <Button className={styles.SignUpForm__btn} type='submit'>Зарегистрироваться</Button>
        <Text
          className={styles.SignUpForm__question}
          align='center'
          size={18}
          text='Уже есть аккаунт?'
        />
        <AppLink className={styles.SignUpForm__loginLink} to={getRouteLogin()}>
          <Text align='center' size={18} weight='bold' text='Войти' />
        </AppLink>
      </form>
    </div>
  )
})

export default SignUpForm
