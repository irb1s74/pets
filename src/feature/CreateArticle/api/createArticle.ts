import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pet } from 'entities/Pet/model/types/Pet'
import { ThunkConfig } from 'app/providers/StoreProvider'

export interface createPetProps {
  images: FileList | undefined
  description: string
}

export const createArticle = createAsyncThunk<Pet, createPetProps, ThunkConfig<string>>(
  'blog/create',
  async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'images') {
          Array.from(value).forEach((img: File) => {
            formData.append('images', img)
          })
        } else {
          formData.append(key, value)
        }
      })

      const response = await extra.api.post<Pet>('blog', formData)

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
