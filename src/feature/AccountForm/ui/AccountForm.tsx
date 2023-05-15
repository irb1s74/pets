import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { Avatar } from 'shared/ui/Avatar'
import classNames from 'classnames'
import './AccountForm.scss'

interface AccountFormProps {
  className?: string
}

export const AccountForm = memo((props: AccountFormProps) => {
  const { className } = props
  const user = useSelector(getUserAuthData)

  const formik = useFormik({
    initialValues: {
      avatar: user.avatar,
      username: user.username,
      dateOfBirth: user.dateOfBirth,
      status: user.status,
      location: user.location,
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values)
    },
  })

  return (
    <form className={classNames('account-form', {}, [className])}>
      <Text size={18} weight='bold' text='Информация' />
      <Avatar className='account-form__avatar-input' size={42} src={user.avatar} />

      {/* <div className='account-form__avatar-input'> */}
      {/*   <ImgIcon /> */}
      {/*   <input hidden /> */}
      {/* </div> */}
      <div className='account-form__group-input'>
        <Input
          id='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Имя'
        />
        <Input
          id='dateOfBirth'
          value={formik.values.dateOfBirth}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Дата рождения'
          type='date'
        />
        <Input
          id='status'
          value={formik.values.status}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Статус'
        />
        <Input
          id='location'
          value={formik.values.location}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Местоположение'
        />
      </div>
      <Text className='account-form__title' size={18} weight='bold' text='Безопасность' />
      <div className='account-form__group-input'>
        <Input
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Текущий пароль'
          type='password'
        />
        <Input className='account-form__input' label='Новый пароль' type='password' />
      </div>
      <Button type='submit'>Сохранить</Button>
    </form>
  )
})
