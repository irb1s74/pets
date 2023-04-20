import { motion } from 'framer-motion'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'
import './LaunchPage.scss'

export const LaunchPage = () => {
  return (
    <motion.div
      className='LaunchPage'
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
    >
      <Logo className='LaunchPage__logo' size='large' />
      <Text className='LaunchPage__text' text='Pets' weight='bold' />
    </motion.div>
  )
}
