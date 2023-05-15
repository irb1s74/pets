import { useFormik } from 'formik'
import { memo } from 'react'
import { Article, ArticleFooter, useLazyCommentArticleQuery } from 'entities/Article'

interface CreateCommentArticleProps {
  className?: string
  article?: Article
}

export const CreateCommentArticle = memo((props: CreateCommentArticleProps) => {
  const { className, article } = props
  const [send] = useLazyCommentArticleQuery()
  const formik = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: () => {
      send(article.id)
      formik.resetForm()
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <ArticleFooter
        className={className}
        handleChange={formik.handleChange}
        values={formik.values}
        errors={formik.errors}
      />
    </form>
  )
})
