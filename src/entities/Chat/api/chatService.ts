import { rtkApi } from 'shared/api/rtkApi'
import { Chat } from '../model/types/Chat'
import { User } from 'entities/User'

const articleService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChats: build.query<Chat[], void>({
      query: () => ({
        url: 'chat',
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
    getChatMessages: build.query<Chat[], number>({
      query: (chatId) => ({
        url: `chat/${chatId}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Chats', id }],
    }),
    findUsers: build.query<User[], string>({
      query: (username) => ({
        url: 'user/find',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: {
          username,
        },
        method: 'POST',
      }),
    }),
    createDialog: build.mutation<Chat, number>({
      query: (secondId) => ({
        url: 'chat/create',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: {
          secondId,
        },
        method: 'POST',
        invalidatesTags: [{ type: 'Chats', id: 'LIST' }],
      }),
    }),
  }),
})

export const {
  useGetChatsQuery,
  useGetChatMessagesQuery,
  useLazyFindUsersQuery,
  useCreateDialogMutation,
} = articleService
