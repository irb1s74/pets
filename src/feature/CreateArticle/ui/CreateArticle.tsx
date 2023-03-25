import { createRef, memo, useState } from 'react'
import { Avatar } from 'shared/ui/Avatar'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import Photo from 'shared/assets/icons/photo.svg'
import classNames from 'classnames'
import styles from './CreateArticle.module.scss'
import { AppImage } from 'shared/ui/AppImage'

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
    <div className={classNames(styles.CreateArticle, {}, [className])}>
      <Avatar src={user.avatar} alt={user.username} size={32} />
      <div className={styles.CreateArticle__content}>
        <textarea rows={4} placeholder='Что у вас нового?' />
      </div>
      <div className={styles.CreateArticle__images}>
        {previewImages ? (
          <>
            {previewImages.map((img, index) => (
              <div className={styles.img} key={index}>
                <AppImage src={img} />
              </div>
            ))}
            <div onClick={handleSelectFiles} className={styles.btn}>
              +
            </div>
          </>
        ) : (
          <div onClick={handleSelectFiles} className={styles.icon}>
            <Photo />
          </div>
        )}
        <input ref={filesInput} onChange={handleUpdateFiles} type='file' multiple hidden />
      </div>
    </div>
  )
})
