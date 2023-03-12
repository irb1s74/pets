import { memo, ReactNode } from 'react'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar/ui/Sidebar'
import classNames from 'classnames'
import styles from './Page.module.scss'

interface PageProps {
  className?: string
  title?: string
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const { className, children, title } = props

  return (
    <div className={classNames(styles.Page, {}, [className])}>
      <Sidebar />
      <div className={styles.Page__container}>
        <Header pageTitle={title} />
        {children}
      </div>
    </div>
  )
})
