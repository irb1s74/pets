import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import Pet from 'shared/assets/icons/pet.svg'
import classNames from 'classnames'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  const [posNum, setPostNum] = useState(0)

  function walk() {
    setPostNum((prevState) => (prevState === 6 ? 0 : prevState + 1))
  }

  setTimeout(walk, 500)
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
      className={classNames(styles.PageLoader, {}, [className])}
    >
      <div className={styles.PageLoader__container}>
        <Pet className={classNames(styles.PageLoader__pet, { [styles[`pos${posNum}`]]: true })} />
      </div>
    </motion.div>
  )
})
