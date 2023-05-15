import { createRef, memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { getUserAuthData } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar'
import { AppImage } from 'shared/ui/AppImage'
import Photo from 'shared/assets/icons/photo.svg'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { createValidationSchema } from '../config/CreateValidationSchema'
import classNames from 'classnames'
import './CreateArticle.scss'
import { createArticle } from 'feature/CreateArticle/api/createArticle'
import { Input } from 'shared/ui/Input'

interface CreateArticleProps {
  className?: string
}

export const CreateArticle = memo((props: CreateArticleProps) => {
  const { className } = props
  const user = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const filesInput = createRef<HTMLInputElement>()
  const [previewImages, setPreviewImages] = useState<string[]>()

  const formik = useFormik({
    initialValues: {
      images: undefined,
      description: '',
    },
    validationSchema: createValidationSchema,
    onSubmit: async (values) => {
      const res = await dispatch(createArticle(values))
      if (typeof res.payload === 'string') {
        formik.setFieldError('description', 'Произошла ошибка')
      } else {
        formik.resetForm()
        setPreviewImages([])
      }
    },
  })

  const handleUpdateFiles = async () => {
    if (filesInput.current.files && filesInput.current.files.length) {
      formik.setFieldValue('images', filesInput.current.files)
      const images = Array.from(filesInput.current.files).map((file) => URL.createObjectURL(file))
      setPreviewImages(images)
    }
  }

  const handleSelectFiles = () => {
    filesInput.current.click()
  }

  return (
    <form onSubmit={formik.handleSubmit} className={classNames('create-article', {}, [className])}>
      <Avatar src={user.avatar} alt={user.username} size={32} />
      <div className='create-article__content'>
        <Input
          id='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          placeholder='Что у вас нового?'
        />
      </div>
      <div className='create-article__images'>
        {previewImages ? (
          <>
            {previewImages.map((img, index) => (
              <div className='create-article__img' key={index}>
                <AppImage inAssets={true} src={img} />
              </div>
            ))}
            <div onClick={handleSelectFiles} className='create-article__btn'>
              +
            </div>
            <button type='submit' className='create-article__sendBtn'>
              отправить
            </button>
          </>
        ) : (
          <div onClick={handleSelectFiles} className='create-article__icon'>
            <Photo />
          </div>
        )}
        <input
          id='images'
          ref={filesInput}
          onChange={handleUpdateFiles}
          accept='.jpeg, .jpg, .png, .gif'
          type='file'
          multiple
          hidden
        />
      </div>
    </form>
  )
})
