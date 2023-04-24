import { useMemo } from 'react'
import { SignUpForm } from 'feature/AuthByEmail'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import Bear from 'shared/assets/images/bear.png'
import Meme from 'shared/assets/images/meme.png'
import ThreeMouses from 'shared/assets/images/threeMouses.png'
import TwoCats from 'shared/assets/images/twoCats.png'
import './SignUpPage.scss'

const SignUpPage = () => {
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
    <main className='signup-page'>
      {width > 1240 && (
        <AppImage
          fallback={<Skeleton height={'100%'} width={selectImages.mw} />}
          className='signup-page__image'
          src={selectImages.src}
          style={{ maxWidth: selectImages.mw }}
        />
      )}
      <SignUpForm className='signup-page__form' />
    </main>
  )
}
export default SignUpPage
