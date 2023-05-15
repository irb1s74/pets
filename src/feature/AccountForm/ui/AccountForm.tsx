import { createRef, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { getUserAuthData } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import ImgIcon from 'shared/assets/icons/selectImgIcon.svg'
import classNames from 'classnames'
import './AccountForm.scss'
import { AppImage } from 'shared/ui/AppImage'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileUpdate } from 'feature/AccountForm/api/profileUpdate'

interface AccountFormProps {
  className?: string
}

export const AccountForm = memo((props: AccountFormProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const user = useSelector(getUserAuthData)
  const filesInput = createRef<HTMLInputElement>()
  const [previewImage, setPreviewImage] = useState<string>()
  const [error, setError] = useState<string>('')

  const formik = useFormik({
    initialValues: {
      avatar: user.avatar,
      username: user.username,
      dateOfBirth: user.dateOfBirth,
      status: user.status,
      location: user.location,
      currentPassword: '',
      password: '',
    },
    onSubmit: async (values) => {
      const res = await dispatch(profileUpdate(values))
      if (typeof res.payload === 'string') {
        setError(res.payload)
      }
    },
  })
  const handleUpdateFiles = async () => {
    if (filesInput.current.files && filesInput.current.files.length) {
      formik.setFieldValue('avatar', filesInput.current.files[0])
      setPreviewImage(URL.createObjectURL(filesInput.current.files[0]))
    }
  }
  const handleSelectFile = () => {
    filesInput.current.click()
  }

  return (
    <form onSubmit={formik.handleSubmit} className={classNames('account-form', {}, [className])}>
      <Text size={18} weight='bold' text='Информация' />
      <div onClick={handleSelectFile} className='account-form__avatar-input'>
        {previewImage ? <AppImage inAssets={true} src={previewImage} /> : <ImgIcon />}
        <input
          id='images'
          ref={filesInput}
          onChange={handleUpdateFiles}
          accept='.jpeg, .jpg, .png, .gif'
          type='file'
          hidden
        />
      </div>
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
          id='currentPassword'
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Текущий пароль'
          type='password'
        />
        <Input
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          className='account-form__input'
          label='Новый пароль'
          type='password'
        />
      </div>
      <Button type='submit' isLoading={formik.isSubmitting}>
        Сохранить
      </Button>
      {error && <Text color='error' text={error} />}
    </form>
  )
})
