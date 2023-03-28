import { object, string } from 'yup'

export const CreateValidationSchema = object({
  name: string().required('Это обязательное поле'),
  about: string().required('Это обязательное поле'),
  goal: string().required('Это обязательное поле'),
})
