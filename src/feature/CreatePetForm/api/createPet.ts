import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pet } from 'entities/Pet/model/types/Pet'
import { ThunkConfig } from 'app/providers/StoreProvider'

export interface createPetProps {
  images: FileList | undefined
  name: string
  gender: boolean
  description: string
  purposeOfPosting: string
  type: string
  breed: string
  dateOfBirth: string
  weight: number
  country: string
  city: string
}

export const createPet = createAsyncThunk<Pet, createPetProps, ThunkConfig<string>>(
  'pets/create',
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

      const response = await extra.api.post<Pet>('pets/create', formData)

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
