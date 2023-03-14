import { memo } from 'react'
import Pet from 'shared/assets/icons/pet.svg'
import classNames from 'classnames'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Pet />
    </div>
  )
})
