import { useParams } from 'react-router-dom'
import { PetDetails, PetImageSwiper, useGetPetQuery } from 'entities/Pet'
import classNames from 'classnames'
import './PetDetailsPage.scss'

interface PetDetailsPageProps {
  className?: string
}

const PetDetailsPage = (props: PetDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetPetQuery(id)
  return (
    <div className={classNames('PetDetailsPage', {}, [className])}>
      <PetImageSwiper
        className='PetDetailsPage__image'
        images={data?.images}
        isLoading={isLoading}
      />
      <PetDetails className='PetDetailsPage__details' data={data} isLoading={isLoading} />
    </div>
  )
}
export default PetDetailsPage
