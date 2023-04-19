import classNames from 'classnames'
import { PetsFilterList } from 'feature/PetsFilterList'
import './PetsPage.scss'

interface PetsPageProps {
  className?: string
}

const PetsPage = (props: PetsPageProps) => {
  const { className } = props
  return (
    <div className={classNames('PetsPage', {}, [className])}>
      <PetsFilterList />
    </div>
  )
}
export default PetsPage
