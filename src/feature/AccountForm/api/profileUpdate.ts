import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { User } from 'entities/User'

export interface profileUpdateProps {
  avatar: File | undefined | string
  username: string
  dateOfBirth: string
  status: string
  location: string
  currentPassword: string
  password: string
}

export const profileUpdate = createAsyncThunk<User, profileUpdateProps, ThunkConfig<string>>(
  'user/profile',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const response = await extra.api.post<User>('user/profile', formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  },
)
