import { LoginForm } from 'feature/AuthByEmail'
import Bear from 'shared/assets/images/bear.png'
import Meme from 'shared/assets/images/meme.png'
import ThreeMouses from 'shared/assets/images/threeMouses.png'
import TwoCats from 'shared/assets/images/twoCats.png'
import styles from './LoginPage.module.scss'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { useWindowDimensions } from 'shared/lib/hooks/useWindowDimensions/useWindowDimensions'
import { useMemo } from 'react'

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
    <main className={styles.LoginPage}>
      {width > 1240 && (
        <AppImage
          fallback={<Skeleton height={'100%'} width={selectImages.mw} />}
          className={styles.image}
          src={selectImages.src}
          style={{ maxWidth: selectImages.mw }}
        />
      )}
      <LoginForm className={styles.form} />
    </main>
  )
}
export default LoginPage
