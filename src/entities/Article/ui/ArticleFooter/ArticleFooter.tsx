import { ChangeEvent, memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar'
import { Input } from 'shared/ui/Input'
import Send from 'shared/assets/icons/sendIcon.svg'
import classNames from 'classnames'
import './ArticleFooter.scss'
import { FormikErrors, FormikTouched } from 'formik'

interface ArticleFooterProps {
  className?: string
  handleChange?: {
    (e: ChangeEvent<any>): void
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void
  }
  values?: { content: string }
  errors?: FormikErrors<{ content: string }>
  touched?: FormikTouched<{ content: string }>
}

export const ArticleFooter = memo((props: ArticleFooterProps) => {
  const { handleChange, values, errors, touched, className } = props
  const user = useSelector(getUserAuthData)

  return (
    <div className={classNames('article-footer', {}, [className])}>
      <Avatar size={32} src={user?.avatar} alt={user?.username} />
      <Input
        id='content'
        onChange={handleChange}
        value={values?.content}
        error={touched?.content && Boolean(errors?.content)}
        helperText={touched?.content && errors?.content}
        className='article-footer__input'
        width='100%'
        placeholder='Написать комментарий...'
      />
      {values.content && (
        <button className='article-footer__btn' type='submit'>
          <Send />
        </button>
      )}
    </div>
  )
})
