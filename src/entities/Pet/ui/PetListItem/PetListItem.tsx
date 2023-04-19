import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppImage } from 'shared/ui/AppImage'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text } from 'shared/ui/Text'
import { getRoutePetDetails } from 'shared/const/router'
import Heart from 'shared/assets/icons/heart.svg'
import { Pet } from '../../model/types/Pet'
import classNames from 'classnames'
import './PetListItem.scss'

interface PetListItemProps {
  className?: string
  data: Pet
}

export const PetListItem = memo((props: PetListItemProps) => {
  const { className, data } = props
  const navigate = useNavigate()
  const handleToClick = () => {
    navigate(getRoutePetDetails(`${data.id}`))
  }

  return (
    <div onClick={handleToClick} className={classNames('PetListItem', {}, [className])}>
      <div className='PetListItem__image'>
        <AppImage
          src={data.previewImg}
          alt={data.name}
          fallback={<Skeleton width='100%' border='16px' height='220px' />}
        />
      </div>
      <div className='PetListItem__content'>
        <div className='PetListItem__about'>
          <Text size={18} text={data.name} />
          <Text size={15} text={data.type} className='PetListItem__type' />
        </div>
        <div className='PetListItem__actions'>
          <Text size={15} className='PetListItem__countLikes' text={`${data.likes} лайка`} />
          <div className='PetListItem__iconBtn'>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  )
})
