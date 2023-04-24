import { PetsFilterList } from 'feature/PetsFilterList'
import classNames from 'classnames'
import './PetsPage.scss'

interface PetsPageProps {
  className?: string
}

const PetsPage = (props: PetsPageProps) => {
  const { className } = props
  return (
    <div className={classNames('pets-page', {}, [className])}>
      <PetsFilterList />
    </div>
  )
}
export default PetsPage
