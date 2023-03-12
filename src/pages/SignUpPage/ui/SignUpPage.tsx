import styles from './SignUpPage.module.scss'
import { SignUpForm } from 'feature/AuthByEmail'
import Bear from 'shared/assets/images/bear.png'
import Meme from 'shared/assets/images/meme.png'
import ThreeMouses from 'shared/assets/images/threeMouses.png'
import TwoCats from 'shared/assets/images/twoCats.png'

const SignUpPage = () => {
  const images = [
    { src: Bear, mw: 675 },
    { src: Meme, mw: 737 },
    { src: ThreeMouses, mw: 737 },
    { src: TwoCats, mw: 855 },
  ]
  const num = Math.floor(Math.random() * 4)
  const selectImages = images[num]

  return (
    <main className={styles.SignUpPage}>
      <img
        className={styles.image}
        src={selectImages.src}
        alt='image'
        style={{ maxWidth: selectImages.mw }}
      />
      <SignUpForm className={styles.form} />
    </main>
  )
}
export default SignUpPage
