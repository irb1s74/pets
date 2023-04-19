import { UserGreetings, UserTime, UserProgress } from 'entities/User'
import { ArticleRecommendationsList } from 'feature/ArticleRecommendationsList'
import { PetsRecommendationsList } from 'feature/PetsRecommendationsList'
import { ChatRecommendationList } from 'feature/ChatRecommendationList'
import { PetsStatisticList } from 'feature/PetsStatisticList/ui/PetsStatisticList'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className='MainPage'>
      <UserGreetings className='MainPage__greetings' />
      <UserProgress className='MainPage__userProgress' />
      <UserTime className='MainPage__dataTime' />
      <ArticleRecommendationsList className='MainPage__articles' />
      <PetsRecommendationsList className='MainPage__pets' />
      <ChatRecommendationList className='MainPage__chats' />
      <PetsStatisticList className='MainPage__petStats' />
    </div>
  )
}
export default MainPage
