import { rtkApi } from 'shared/api/rtkApi'
import { User } from 'entities/User'

const articleService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<User[], void>({
      query: () => ({
        url: 'users',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Chats', id } as const)),
        { type: 'Chats' as const, id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetChatsQuery } = articleService
