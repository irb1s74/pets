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
    <div className={classNames('AccountForm', {}, [className])}>
      <Text size={18} weight='bold' text='Информация' />
      <div className='AccountForm__avatarInput'>
        <ImgIcon />
        <input hidden />
      </div>
      <div className='AccountForm__groupInput'>
        <Input className='AccountForm__input' label='Имя' />
        <Input className='AccountForm__input' label='Дата рождения' type='date' />
        <Input className='AccountForm__input' label='Статус' />
        <Input className='AccountForm__input' label='Местоположение' />
      </div>
      <Text className='AccountForm__title' size={18} weight='bold' text='Безопасность' />
      <div className='AccountForm__groupInput'>
        <Input className='AccountForm__input' label='Текущий пароль' type='password' />
        <Input className='AccountForm__input' label='Новый пароль' type='password' />
      </div>
      <Button>Сохранить</Button>
    </div>
  )
})
