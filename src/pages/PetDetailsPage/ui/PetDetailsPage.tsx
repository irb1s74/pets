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
    <div className={classNames('pet-details-page', {}, [className])}>
      <PetImageSwiper
        className='pet-details-page__image'
        images={data?.images}
        isLoading={isLoading}
      />
      <PetDetails className='pet-details-page__content' data={data} isLoading={isLoading} />
    </div>
  )
}
export default PetDetailsPage
