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
      console.log(values)
      setError('')
      const result = await dispatch(loginByEmail(values))
      if (result.payload === 'error') {
        setError('Неправильный логин или пароль')
      }
    },
  })

  return (
    <div className={classNames('LoginForm', {}, [className])}>
      <form onSubmit={formik.handleSubmit} className='LoginForm__form'>
        <Logo size='medium' />
        <Text className='LoginForm__title' size={30} weight='medium' text='Вход' />
        <Text
          className='LoginForm__subtitle'
          size={18}
          text='Войдите в систему сейчас, чтобы  получить доступ к вашим питомцам'
        />
        <Input
          id='email'
          className='LoginForm__input'
          label='Почта'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          id='password'
          className='LoginForm__input'
          type='password'
          label='Пароль'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <AppLink className='LoginForm__linkToChgPass' to=''>
          <Text align='right' text='Забыли пароль?' size={14} />
        </AppLink>
        <Button disabled={!formik.isValid} isLoading={formik.isSubmitting} type='submit'>
          Войти
        </Button>
        {error && <Text align='center' text={error} color='danger' />}
        <Text
          className='LoginForm__question'
          align='center'
          size={18}
          text='У вас ещё нет аккаунта?'
        />
        <AppLink className='LoginForm__signUpLink' to={getRouteSignUp()}>
          <Text align='center' size={18} weight='bold' text='Зарегистрироваться' />
        </AppLink>
      </form>
    </div>
  )
})
export default LoginForm
