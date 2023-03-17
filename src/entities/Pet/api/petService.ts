import { rtkApi } from 'shared/api/rtkApi'
import { Pet } from '../model/types/Pet'

const petService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPets: build.query<Pet[], void>({
      query: () => ({
        url: 'pets',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Pets', id } as const)),
        { type: 'Pets' as const, id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetPetsQuery } = petService
