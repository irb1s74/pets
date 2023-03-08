import { CSSProperties, memo, useMemo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  online?: boolean
  fallbackInverted?: boolean
}

export const Avatar = memo(({ className, src, size, alt, online = false }: AvatarProps) => {
  const backgroundColor = useMemo(() => {
    const altToLower = alt.toLowerCase()
    return altToLower < 'd'
      ? 'green'
      : altToLower < 'h'
      ? 'cyan'
      : altToLower < 'l'
      ? 'indigo'
      : altToLower < 'p'
      ? 'amber'
      : altToLower < 't'
      ? 'purple'
      : 'pink'
  }, [alt])

  const mods = {
    [cls[backgroundColor]]: true,
  }

  const stylesAvatar = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
      borderRadius: '50%',
    }),
    [size],
  )

  const fontSize = useMemo(
    () =>
      size <= 24 ? 10 : size <= 32 ? 12 : size <= 48 ? 16 : size <= 64 ? 20 : size <= 96 ? 30 : 44,
    [size],
  )
  const fallback = <Skeleton width={size} height={size} border='50%' />

  const errorFallback = (
    <Text text={`${alt.split('').slice(0, 2).join('').toUpperCase()}`} size={fontSize} />
  )

  return (
    <div className={classNames(cls.Avatar, mods, [className])} style={stylesAvatar}>
      <AppImage fallback={fallback} errorFallback={errorFallback} src={src} alt={alt} />
      {online && <span className={cls.online} />}
    </div>
  )
})
