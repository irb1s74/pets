import { UserGreetings, UserTime, UserProgress } from 'entities/User'
import { ArticleRecommendationsList } from 'feature/ArticleRecommendationsList'
import styles from './MainPage.module.scss'
import { PetsRecommendationsList } from 'feature/PetsRecommendationsList'
import { ChatRecommendationList } from 'feature/ChatRecommendationList'
import { PetsStatisticList } from 'feature/PetsStatisticList/ui/PetsStatisticList'

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <UserGreetings className={styles.MainPage__greetings} />
      <UserProgress className={styles.MainPage__userProgress} />
      <UserTime className={styles.MainPage__dataTime} />
      <ArticleRecommendationsList className={styles.MainPage__articles} />
      <PetsRecommendationsList className={styles.MainPage__pets} />
      <ChatRecommendationList className={styles.MainPage__chats} />
      <PetsStatisticList className={styles.MainPage__petStats} />
    </div>
  )
}
export default MainPage
