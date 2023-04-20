import { CSSProperties } from 'react'
import classNames from 'classnames'
import './Skeleton.scss'

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

  return <div className={classNames('Skeleton', {}, [className])} style={styles} />
}
