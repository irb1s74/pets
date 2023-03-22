import { memo, ReactNode } from 'react'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar/ui/Sidebar'
import classNames from 'classnames'
import styles from './Page.module.scss'
import { motion } from 'framer-motion'

interface PageProps {
  className?: string
  title?: string
  useGoBack?: boolean
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const { className, children, title, useGoBack } = props

  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
      }}
      exit={{
        opacity: 0,
      }}
      className={classNames(styles.Page, {}, [className])}
    >
      <Sidebar />
      <div className={styles.Page__container}>
        <Header useGoBack={useGoBack} pageTitle={title} />
        {children}
      </div>
    </motion.div>
  )
})
