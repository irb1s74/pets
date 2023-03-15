export { UserGreetings } from './ui/UserGreetings/UserGreetings'
export { UserTime } from './ui/UserTime'

export { initialAuth } from './api/initialAuth'

export { getUserAuthData } from './model/selectors/getUserAuthData'
export { getUserInited } from './model/selectors/getUserInited'
export { userReducer, userActions } from './model/slice/userSlice'
export type { UserSchema, User } from './model/types/user'
