import { Page } from 'widget/Page'
import { Button } from 'shared/ui/Button'
import { Logo } from 'shared/ui/Logo'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { Avatar } from 'shared/ui/Avatar'

const MainPage = () => {
  const { toggleTheme } = useTheme()
  return (
    <Page>
      <Logo />
      <Logo size='medium' />
      <Logo size='large' />
      <Button onClick={toggleTheme} variant='secondary'>Кнопка</Button>
      <Button>Кнопка</Button>
      <Button size='small'>Кнопка</Button>
      <Button disabled={true}>Кнопка</Button>
      <Button isLoading={true}>Кнопка</Button>
      <Avatar size={25} />
    </Page>
  )
}
export default MainPage
