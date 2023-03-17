import { UserGreetings, UserTime, UserProgress } from 'entities/User'
import { ArticleRecommendationsList } from 'feature/ArticleRecommendationsList'
import styles from './MainPage.module.scss'
const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <UserGreetings className={styles.MainPage__greetings} />
      <UserProgress className={styles.MainPage__userProgress} />
      <UserTime className={styles.MainPage__dataTime} />
      <ArticleRecommendationsList className={styles.MainPage__articles} />
    </div>
  )
}
export default MainPage
