import classNames from 'classnames'
import styles from './PetsPage.module.scss'
import { Page } from 'widget/Page'

interface PetsPageProps {
  className?: string
}

const PetsPage = (props: PetsPageProps) => {
  const { className } = props
  return (
    <Page title='Питомцы'>
      <div className={classNames(styles.PetsPage, {}, [className])}></div>
    </Page>
  )
}
export default PetsPage
