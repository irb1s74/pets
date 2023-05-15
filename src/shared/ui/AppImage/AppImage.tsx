import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
  inAssets?: boolean
}

export const AppImage = memo((props: AppImageProps) => {
  const {
    className,
    inAssets = false,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const srcWithApi = inAssets ? src : `${__API__}${src}`

  useLayoutEffect(() => {
    const img = new Image()
    img.src = srcWithApi ?? ''
    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [srcWithApi])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  if (hasError) {
    return fallback
  }

  return <img className={className} src={srcWithApi} alt={alt} {...otherProps} />
})
