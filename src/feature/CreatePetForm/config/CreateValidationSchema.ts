import { mixed, object, string } from 'yup'

export const createValidationSchema = object({
  images: mixed().required('Это обязательное поле'),
  name: string().required('Это обязательное поле'),
  gender: string().required('Это обязательное поле'),
  description: string().required('Это обязательное поле'),
  purposeOfPosting: string().required('Это обязательное поле'),
  type: string().required('Это обязательное поле'),
  breed: string().required('Это обязательное поле'),
  dateOfBirth: string().required('Это обязательное поле'),
  weight: string().required('Это обязательное поле'),
  country: string().required('Это обязательное поле'),
  city: string().required('Это обязательное поле'),
})
