import { memo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar/ui/Sidebar'
import classNames from 'classnames'
import './Page.scss'

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
      className={classNames('page', {}, [className])}
    >
      <Sidebar />
      <div className='page__container'>
        <Header useGoBack={useGoBack} pageTitle={title} />
        {children}
      </div>
    </motion.div>
  )
})
