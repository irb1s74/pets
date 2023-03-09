import styles from './LaunchPage.module.scss'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'

export const LaunchPage = () => {
  return (
    <div className={styles.LaunchPage}>
      <Logo size='large' className={styles.LaunchPage__logo} />
      <Text text='Pets' weight='bold' className={styles.LaunchPage__text} />
    </div>
  )
}
