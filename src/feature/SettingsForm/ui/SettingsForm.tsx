import { memo } from 'react'
import { Text } from 'shared/ui/Text'
import { Switch } from 'shared/ui/Switch'
import classNames from 'classnames'
import './SettingsForm.scss'

interface SettingsFormProps {
  className?: string
}

export const SettingsForm = memo((props: SettingsFormProps) => {
  const { className } = props
  return (
    <div className={classNames('SettingsForm', {}, [className])}>
      <Text className='SettingsForm__title' size={18} weight='bold' text='Настройки' />
      <Text className='SettingsForm__subtitle' size={12} weight='bold' text='АККАУНТ' />
      <div className='SettingsForm__groupInputs'>
        <label className='SettingsForm__input'>
          <Switch />
          <Text size={14} text='Включить уведомления' />
        </label>
        <label className='SettingsForm__input'>
          <Switch />
          <Text size={14} text='Получать новостную рассылку' />
        </label>
      </div>
      <Text className='SettingsForm__subtitle' size={12} weight='bold' text='ПРИЛОЖЕНИЕ' />
      <div className='SettingsForm__groupInputs'>
        <label className='SettingsForm__input'>
          <Switch />
          <Text size={14} text='Включить начной режим' />
        </label>
        <label className='SettingsForm__input'>
          <Switch />
          <Text size={14} text='Получать уведомления со звуком' />
        </label>
        <label className='SettingsForm__input'>
          <Switch />
          <Text size={14} text='Браузерные уведомления' />
        </label>
      </div>
    </div>
  )
})
