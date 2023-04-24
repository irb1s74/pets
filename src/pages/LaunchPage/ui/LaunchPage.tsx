import { motion } from 'framer-motion'
import { Logo } from 'shared/ui/Logo'
import { Text } from 'shared/ui/Text'
import './LaunchPage.scss'

export const LaunchPage = () => {
  return (
    <motion.div
      className='launch-page'
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
      <Logo className='launch-page__logo' size='large' />
      <Text className='launch-page__text' text='Pets' weight='bold' />
    </motion.div>
  )
}
