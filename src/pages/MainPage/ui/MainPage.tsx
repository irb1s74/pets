import styles from './MainPage.module.scss'
import { UserGreetings, UserTime } from 'entities/User'
import { UserProgress } from 'entities/User/ui/UserProgress'

const MainPage = () => {

  return (
    <div className={styles.MainPage}>
      <UserGreetings className={styles.MainPage__greetings} />
      <UserProgress className={styles.MainPage__userProgress} />
      <UserTime className={styles.MainPage__dataTime} />
    </div>
  )
}
export default MainPage
