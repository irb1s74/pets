import { createRef, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar'
import { AppImage } from 'shared/ui/AppImage'
import Photo from 'shared/assets/icons/photo.svg'
import classNames from 'classnames'
import './CreateArticle.scss'

interface CreateArticleProps {
  className?: string
}

export const CreateArticle = memo((props: CreateArticleProps) => {
  const { className } = props
  const user = useSelector(getUserAuthData)
  const filesInput = createRef<HTMLInputElement>()
  const [previewImages, setPreviewImages] = useState<string[]>()
  const handleUpdateFiles = async () => {
    if (filesInput.current.files && filesInput.current.files.length) {
      const images = Array.from(filesInput.current.files).map((file) => URL.createObjectURL(file))
      if (images.length) {
        setPreviewImages(images)
      }
    }
  }
  const handleSelectFiles = () => {
    filesInput.current.click()
  }
  return (
    <div className={classNames('CreateArticle', {}, [className])}>
      <Avatar src={user.avatar} alt={user.username} size={32} />
      <div className='CreateArticle__content'>
        <textarea rows={4} placeholder='Что у вас нового?' />
      </div>
      <div className='CreateArticle__images'>
        {previewImages ? (
          <>
            {previewImages.map((img, index) => (
              <div className='CreateArticle__img' key={index}>
                <AppImage src={img} />
              </div>
            ))}
            <div onClick={handleSelectFiles} className='CreateArticle__btn'>
              +
            </div>
          </>
        ) : (
          <div onClick={handleSelectFiles} className='CreateArticle__icon'>
            <Photo />
          </div>
        )}
        <input
          ref={filesInput}
          accept='.jpeg, .jpg, .png, .gif'
          onChange={handleUpdateFiles}
          type='file'
          multiple
          hidden
        />
      </div>
    </div>
  )
})
