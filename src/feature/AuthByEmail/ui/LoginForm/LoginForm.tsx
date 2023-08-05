import { memo, useState } from 'react'
import { useFormik } from 'formik'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink'
import { Logo } from 'shared/ui/Logo'
import { getRouteSignUp } from 'shared/const/router'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { loginByEmail } from '../../api/loginByEmail'
import { LoginValidationSchema } from '../../config/LoginValidationSchema'
import classNames from 'classnames'
import './LoginForm.scss'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      setError('')
      const result = await dispatch(loginByEmail(values))
      if (result.payload === 'error') {
        setError('Неправильный логин или пароль')
      }
    },
  })

  return (
    <div className={classNames('login-form', {}, [className])}>
      <form onSubmit={formik.handleSubmit} className='login-form__content'>
        <Logo size='medium' />
        <Text className='login-form__title' size={30} weight='medium' text='Вход' />
        <Text
          className='login-form__subtitle'
          size={18}
          text='Войдите в систему сейчас, чтобы  получить доступ к вашим питомцам'
        />
        <Input
          id='email'
          className='login-form__input'
          label='Почта'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          id='password'
          className='login-form__input'
          type='password'
          label='Пароль'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Text align='center' size={12} weight='bold' text='Тест: user@gmail.com,123' />
        <AppLink className='login-form__link-pass' to=''>
          <Text align='right' text='Забыли пароль?' size={14} />
        </AppLink>
        <Button disabled={!formik.isValid} isLoading={formik.isSubmitting} type='submit'>
          Войти
        </Button>
        {error && <Text align='center' text={error} color='danger' />}
        <Text
          className='login-form__question'
          align='center'
          size={18}
          text='У вас ещё нет аккаунта?'
        />
        <AppLink className='login-form__signup-link' to={getRouteSignUp()}>
          <Text align='center' size={18} weight='bold' text='Зарегистрироваться' />
        </AppLink>
      </form>
    </div>
  )
})
export default LoginForm
