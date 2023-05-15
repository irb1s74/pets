import { rtkApi } from 'shared/api/rtkApi'
import { Pet } from '../model/types/Pet'

const petService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPets: build.query<Pet[], string>({
      query: (type) => ({
        url: type ? `pets?filter=${type}` : 'pets',
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
    getPet: build.query<Pet, string>({
      query: (id) => ({
        url: `pets/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Pets', id }],
    }),
    likePet: build.query<Pet, number>({
      query: (id) => ({
        url: `pets/like/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Pets', id }],
    }),
    unLikePet: build.query<Pet, number>({
      query: (id) => ({
        url: `pets/unLike/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Pets', id }],
    }),
  }),
})

export const { useGetPetsQuery, useGetPetQuery, useLazyLikePetQuery, useLazyUnLikePetQuery } =
  petService
