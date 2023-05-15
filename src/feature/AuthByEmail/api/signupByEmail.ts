import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { ThunkConfig } from 'app/providers/StoreProvider'

interface SignupByEmaoilProps {
  username: string
  email: string
  password: string
}

export const signupByEmail = createAsyncThunk<User, SignupByEmaoilProps, ThunkConfig<string>>(
  'login/signupByEmail',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.post<User>('auth/signup', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.token)
      dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
