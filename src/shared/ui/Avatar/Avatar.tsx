import { CSSProperties, memo, useMemo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import classNames from 'classnames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}


export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  )
  const fallback = <Skeleton width={size} height={size} border='50%' />

  return (
    <AppImage
      fallback={fallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
})
