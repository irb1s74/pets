import { memo } from 'react'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink'
import { Logo } from 'shared/ui/Logo'
import { getRouteSignUp } from 'shared/const/router'
import { useFormik } from 'formik'
import classNames from 'classnames'
import { LoginValidationSchema } from '../../config/LoginValidationSchema'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <form onSubmit={formik.handleSubmit} className={styles.LoginForm__form}>
        <Logo size='medium' />
        <Text className={styles.LoginForm__title} size={30} weight='medium' text='Вход' />
        <Text
          className={styles.LoginForm__subtitle}
          size={18}
          text='Войдите в систему сейчас, чтобы  получить доступ к вашим питомцам'
        />
        <Input
          id='email'
          className={styles.LoginForm__input}
          label='Почта'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          id='password'
          className={styles.LoginForm__input}
          type='password'
          label='Пароль'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <AppLink className={styles.LoginForm__linkToChgPass} to=''>
          <Text align='right' text='Забыли пароль?' size={14} />
        </AppLink>
        <Button type='submit'>Войти</Button>
        <Text
          className={styles.LoginForm__question}
          align='center'
          size={18}
          text='У вас ещё нет аккаунта?'
        />
        <AppLink className={styles.LoginForm__signUpLink} to={getRouteSignUp()}>
          <Text align='center' size={18} weight='bold' text='Зарегистрироваться' />
        </AppLink>
      </form>
    </div>
  )
})
export default LoginForm
