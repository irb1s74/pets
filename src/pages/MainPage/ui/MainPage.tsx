import { UserGreetings, UserTime, UserProgress } from 'entities/User'
import { ArticleRecommendationsList } from 'feature/ArticleRecommendationsList'
import { PetsRecommendationsList } from 'feature/PetsRecommendationsList'
import { ChatRecommendationList } from 'feature/ChatRecommendationList'
import { PetsStatisticList } from 'feature/PetsStatisticList/ui/PetsStatisticList'
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className='main-page'>
      <UserGreetings className='main-page__greetings' />
      <UserProgress className='main-page__user-progress' />
      <UserTime className='main-page__data-time' />
      <ArticleRecommendationsList className='main-page__articles' />
      <PetsRecommendationsList className='main-page__pets' />
      <ChatRecommendationList className='main-page__chats' />
      <PetsStatisticList className='main-page__pet-stats' />
    </div>
  )
}
export default MainPage
