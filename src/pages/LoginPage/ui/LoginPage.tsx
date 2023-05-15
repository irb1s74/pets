import { useMemo } from 'react'
import { LoginForm } from 'feature/AuthByEmail'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import Bear from 'shared/assets/images/bear.png'
import Meme from 'shared/assets/images/meme.png'
import ThreeMouses from 'shared/assets/images/threeMouses.png'
import TwoCats from 'shared/assets/images/twoCats.png'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import './LoginPage.scss'

const LoginPage = () => {
  const images = [
    { src: Bear, mw: 675 },
    { src: Meme, mw: 737 },
    { src: ThreeMouses, mw: 737 },
    { src: TwoCats, mw: 855 },
  ]
  const num = useMemo(() => Math.floor(Math.random() * 4), [])
  const selectImages = images[num]
  const { width } = useWindowDimensions()

  return (
    <main className='login-page'>
      {width > 1240 && (
        <AppImage
          inAssets={true}
          fallback={<Skeleton height={'100%'} width={selectImages.mw} />}
          className='login-page__image'
          src={selectImages.src}
          style={{ maxWidth: selectImages.mw }}
        />
      )}
      <LoginForm className='login-page__form' />
    </main>
  )
}
export default LoginPage
