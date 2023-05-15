import { mixed, object, string } from 'yup'

export const createValidationSchema = object({
  images: mixed().required('Это обязательное поле'),
  description: string().required('Это обязательное поле'),
})
