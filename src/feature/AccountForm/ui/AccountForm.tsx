import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import ImgIcon from 'shared/assets/icons/selectImgIcon.svg'
import classNames from 'classnames'
import './AccountForm.scss'

interface AccountFormProps {
  className?: string
}

export const AccountForm = memo((props: AccountFormProps) => {
  const { className } = props
  return (
    <div className={classNames('account-form', {}, [className])}>
      <Text size={18} weight='bold' text='Информация' />
      <div className='account-form__avatar-input'>
        <ImgIcon />
        <input hidden />
      </div>
      <div className='account-form__group-input'>
        <Input className='account-form__input' label='Имя' />
        <Input className='account-form__input' label='Дата рождения' type='date' />
        <Input className='account-form__input' label='Статус' />
        <Input className='account-form__input' label='Местоположение' />
      </div>
      <Text className='account-form__title' size={18} weight='bold' text='Безопасность' />
      <div className='account-form__group-input'>
        <Input className='account-form__input' label='Текущий пароль' type='password' />
        <Input className='account-form__input' label='Новый пароль' type='password' />
      </div>
      <Button>Сохранить</Button>
    </div>
  )
})
