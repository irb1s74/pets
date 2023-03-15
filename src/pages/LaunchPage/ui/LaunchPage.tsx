import styles from './LaunchPage.module.scss'
import { motion } from 'framer-motion'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'

export const LaunchPage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
      }}
      exit={{
        opacity: 0,
      }}
      className={styles.LaunchPage}
    >
      <Logo size='large' className={styles.LaunchPage__logo} />
      <Text text='Pets' weight='bold' className={styles.LaunchPage__text} />
    </motion.div>
  )
}
