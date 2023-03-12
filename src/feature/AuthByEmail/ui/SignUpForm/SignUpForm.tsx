import { memo, useState } from 'react'
import { useFormik } from 'formik'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { AppLink } from 'shared/ui/AppLink'
import { Button } from 'shared/ui/Button'
import { getRouteLogin } from 'shared/const/router'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { loginByEmail } from '../../api/loginByEmail'
import { SignUpValidationSchema } from '../../config/SignUpValidationSchema'
import classNames from 'classnames'
import styles from './SignUpForm.module.scss'

interface SignUpFormProps {
  className?: string
}

const SignUpForm = memo(({ className }: SignUpFormProps) => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
    },

    validationSchema: SignUpValidationSchema,
    isInitialValid: false,
    onSubmit: async (values) => {
      const result = await dispatch(loginByEmail(values))
      if (result.payload === 'error') {
        setError('Аккаунт с такой почтой уже существует')
      }
    },
  })

  return (
    <div className={classNames(styles.SignUpForm, {}, [className])}>
      <form onSubmit={formik.handleSubmit} className={styles.SignUpForm__form}>
        <Logo size='medium' />
        <Text className={styles.SignUpForm__title} size={30} weight='medium' text='Регистрация' />
        <Text
          className={styles.SignUpForm__subtitle}
          size={18}
          text='Зарегистрируйтесь сейчас бесплатно и добавьте своего питомца'
        />

        <Input
          id='email'
          className={styles.SignUpForm__input}
          label='Почта'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Input
          id='nickname'
          className={styles.SignUpForm__input}
          label='Никнэйм'
          type='string'
          value={formik.values.nickname}
          onChange={formik.handleChange}
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          helperText={formik.touched.nickname && formik.errors.nickname}
        />
        <Input
          id='password'
          className={styles.SignUpForm__input}
          type='password'
          label='Пароль'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          disabled={!formik.isValid}
          isLoading={formik.isSubmitting}
          className={styles.SignUpForm__btn}
          type='submit'
        >
          Зарегистрироваться
        </Button>
        {error && <Text align='center' text={error} color='danger' />}
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
