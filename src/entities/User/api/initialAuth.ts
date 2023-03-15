import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { ThunkConfig } from 'app/providers/StoreProvider'

export const initialAuth = createAsyncThunk<User, undefined, ThunkConfig<string>>(
  'user/initialAuthByStorageData',
  async (props, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi

    try {
      const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))
      const response = await extra.api.post<User>('login', user)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
