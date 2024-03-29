import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import Pet from 'shared/assets/icons/pet.svg'
import classNames from 'classnames'
import './PageLoader.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  const [posNum, setPostNum] = useState(0)

  const walk = () => {
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
      className={classNames('page-loader', {}, [className])}
    >
      <div className='page-loader__container'>
        <Pet
          className={classNames('page-loader__pet', { [`page-loader__pet_pos${posNum}`]: true })}
        />
      </div>
    </motion.div>
  )
})
