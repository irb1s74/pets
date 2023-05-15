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
    likeArticle: build.query<Article, number>({
      query: (id) => ({
        url: `blog/like/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Articles', id }],
    }),
    unLikeArticle: build.query<Article, number>({
      query: (id) => ({
        url: `blog/unLike/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Articles', id }],
    }),
    commentArticle: build.query<Article, number>({
      query: (id) => ({
        url: `blog/comment/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        method: 'POST',
      }),
      providesTags: (_result, _err, id) => [{ type: 'Articles', id }],
    }),
  }),
})

export const {
  useGetArticlesQuery,
  useLazyLikeArticleQuery,
  useLazyUnLikeArticleQuery,
  useLazyCommentArticleQuery,
} = articleService
