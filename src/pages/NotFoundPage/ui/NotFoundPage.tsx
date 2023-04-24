import { Page } from 'widget/Page'
import { Text } from 'shared/ui/Text'
import Dragon from 'shared/assets/images/dragon.png'
import SadCat from 'shared/assets/images/sadCat.png'
import BrokenCat from 'shared/assets/images/brokenCat.png'
import SadBae from 'shared/assets/images/sadBae.png'
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  const images = [
    {
      src: Dragon,
      title: 'Is That A Dragon ?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.',
    },
    {
      src: SadCat,
      title: 'Ugh I Just Break It !',
      text: 'Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow ',
    },
    {
      src: BrokenCat,
      title: 'This Thing Is Broken',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.',
    },
    {
      src: SadBae,
      title: 'Looking Sad Bae ?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.',
    },
  ]
  const num = Math.floor(Math.random() * 4)
  const selectImages = images[num]

  return (
    <Page title='404'>
      <div className='not-found-page'>
        <img className='not-found-page__image' src={selectImages.src} alt='dragon' />
        <Text
          className='not-found-page__text'
          align='center'
          text={selectImages.title}
          size={48}
          weight='bold'
        />
        <Text
          className='not-found-page__subtext'
          align='center'
          size={24}
          text={selectImages.text}
        />
      </div>
    </Page>
  )
}
