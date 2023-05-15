import { object, string } from 'yup'

export const SignUpValidationSchema = object({
  username: string().required('Это обязательное поле'),
  email: string().email('Неверно написанные почты').required('Это обязательное поле'),
  password: string().required('Это обязательное поле'),
})
