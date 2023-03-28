import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import styles from './SettingsForm.module.scss'
import { Switch } from 'shared/ui/Switch'

interface SettingsFormProps {
  className?: string
}

export const SettingsForm = memo((props: SettingsFormProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.SettingsForm, {}, [className])}>
      <Text className={styles.SettingsForm__title} size={18} weight='bold' text='Настройки' />
      <Text className={styles.SettingsForm__subtitle} size={12} weight='bold' text='АККАУНТ' />
      <div className={styles.SettingsForm__groupInputs}>
        <label className={styles.input}>
          <Switch />
          <Text size={14} text='Включить уведомления' />
        </label>
        <label className={styles.input}>
          <Switch />
          <Text size={14} text='Получать новостную рассылку' />
        </label>
      </div>
      <Text className={styles.SettingsForm__subtitle} size={12} weight='bold' text='ПРИЛОЖЕНИЕ' />
      <div className={styles.SettingsForm__groupInputs}>
        <label className={styles.input}>
          <Switch />
          <Text size={14} text='Включить начной режим' />
        </label>
        <label className={styles.input}>
          <Switch />
          <Text size={14} text='Получать уведомления со звуком' />
        </label>
        <label className={styles.input}>
          <Switch />
          <Text size={14} text='Браузерные уведомления' />
        </label>
      </div>
    </div>
  )
})
