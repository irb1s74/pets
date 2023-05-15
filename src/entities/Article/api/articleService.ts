import { rtkApi } from 'shared/api/rtkApi'
import { Article } from '../model/types/Article'

const articleService = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Article[], void>({
      query: () => ({
        url: 'blog',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Articles', id } as const)),
        { type: 'Articles' as const, id: 'LIST' },
      ],
    }),
  }),
})

export const { useGetArticlesQuery } = articleService
