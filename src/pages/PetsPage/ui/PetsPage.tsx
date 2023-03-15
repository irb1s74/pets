import classNames from 'classnames'
import styles from './PetsPage.module.scss'

interface PetsPageProps {
  className?: string
}

const PetsPage = (props: PetsPageProps) => {
  const { className } = props
  return <div className={classNames(styles.PetsPage, {}, [className])}></div>
}
export default PetsPage
