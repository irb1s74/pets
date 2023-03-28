import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import ImgIcon from 'shared/assets/icons/selectImgIcon.svg'
import classNames from 'classnames'
import styles from './AccountForm.module.scss'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'

interface AccountFormProps {
  className?: string
}

export const AccountForm = memo((props: AccountFormProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.AccountForm, {}, [className])}>
      <Text size={18} weight='bold' text='Информация' />
      <div className={styles.AccountForm__avatarInput}>
        <ImgIcon />
        <input hidden />
      </div>
      <div className={styles.AccountForm__groupInput}>
        <Input className={styles.input} label='Имя' />
        <Input className={styles.input} label='Дата рождения' type='date' />
        <Input className={styles.input} label='Статус' />
        <Input className={styles.input} label='Местоположение' />
      </div>
      <Text className={styles.title} size={18} weight='bold' text='Безопасность' />
      <div className={styles.AccountForm__groupInput}>
        <Input className={styles.input} label='Текущий пароль' type='password' />
        <Input className={styles.input} label='Новый пароль' type='password' />
      </div>
      <Button>Сохранить</Button>
    </div>
  )
})
