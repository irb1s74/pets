import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Page.module.scss'

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ className, children }) => {
  return (
    <main className={classNames(styles.Page, {}, [className])}>
      {children}
    </main>
  )
}
