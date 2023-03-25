import { rtkApi } from 'shared/api/rtkApi'
import { Chat } from '../model/types/Chat'

const articleService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<Chat[], void>({
      query: () => ({
        url: 'chats',
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
