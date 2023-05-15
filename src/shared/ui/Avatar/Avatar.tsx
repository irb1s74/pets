import { CSSProperties, memo, useMemo } from 'react'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import classNames from 'classnames'
import './Avatar.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  online?: boolean
}

export const Avatar = memo(
  ({ className, src, size, alt = 'image', online = false }: AvatarProps) => {
    const backgroundColor = useMemo(() => {
      const altToLower = alt?.toLowerCase()
      return altToLower < 'd'
        ? 'avatar_green'
        : altToLower < 'h'
        ? 'avatar_cyan'
        : altToLower < 'l'
        ? 'avatar_indigo'
        : altToLower < 'p'
        ? 'avatar_amber'
        : altToLower < 't'
        ? 'avatar_purple'
        : 'avatar_pink'
    }, [alt])

    const mods = {
      [backgroundColor]: true,
    }

    const stylesAvatar = useMemo<CSSProperties>(
      () => ({
        width: size,
        minWidth: size,
        height: size,
        minHeight: size,
        borderRadius: '50%',
      }),
      [size],
    )

    const fontSize = useMemo(
      () =>
        size <= 24
          ? 10
          : size <= 32
          ? 12
          : size <= 48
          ? 16
          : size <= 64
          ? 20
          : size <= 96
          ? 30
          : 44,
      [size],
    )
    const fallback = <Skeleton width={size} height={size} border='50%' />

    const errorFallback = (
      <Text text={`${alt.split('').slice(0, 2).join('').toUpperCase()}`} size={fontSize} />
    )

    return (
      <div className={classNames('avatar', mods, [className])} style={stylesAvatar}>
        <AppImage
          fallback={fallback}
          errorFallback={errorFallback}
          src={`avatars/${src}`}
          alt={alt}
        />
        {online && <span className='avatar_online' />}
      </div>
    )
  },
)
