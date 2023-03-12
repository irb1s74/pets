import { object, string } from 'yup'

export const LoginValidationSchema = object({
  email: string().email('Неверно написанные почты').required('Это обязательное поле'),
  password: string().required('Это обязательное поле'),
})
