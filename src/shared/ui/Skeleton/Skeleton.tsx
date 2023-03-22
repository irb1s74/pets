import { CSSProperties } from 'react'
import classNames from 'classnames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border } = props

  const styles: CSSProperties = {
    width: width,
    height: height,
    borderRadius: border,
  }

  return <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
}
