import { Page } from 'widget/Page'
import { Button } from 'shared/ui/Button'
import { Logo } from 'shared/ui/Logo'
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme'
import { Avatar } from 'shared/ui/Avatar'
import { Input } from 'shared/ui/Input'
import { Switch } from 'shared/ui/Switch'
import { Radio } from 'shared/ui/Radio'

const MainPage = () => {
  const { toggleTheme } = useTheme()
  return (
    <Page>
      <Logo />
      <Logo size='medium' />
      <Logo size='large' />
      <Button onClick={toggleTheme} variant='secondary'>
        Кнопка
      </Button>
      <Button>Кнопка</Button>
      <Button size='small'>Кнопка</Button>
      <Button disabled={true}>Кнопка</Button>
      <Button isLoading={true}>Кнопка</Button>
      <Avatar online={true} size={65} src={'aboa'} alt='user' />
      <Avatar
        online={true}
        size={65}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KyTmrTPHz1dzy5U_WBl-lSGPLpdxyauzQw&usqp=CAU'
        alt='USER'
      />
      <Input type='email' required={true} error={true} label='Aboba' helperText='Error massage' />
      <Switch />
      <Radio />
    </Page>
  )
}
export default MainPage
