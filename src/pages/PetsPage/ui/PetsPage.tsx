import classNames from 'classnames'
import styles from './PetsPage.module.scss'
import { PetsFilterList } from 'feature/PetsFilterList'

interface PetsPageProps {
  className?: string
}

const PetsPage = (props: PetsPageProps) => {
  const { className } = props
  return (
    <div className={classNames(styles.PetsPage, {}, [className])}>
      <PetsFilterList />
    </div>
  )
}
export default PetsPage
