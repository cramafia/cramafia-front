import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { Tokens } from '@/types/api.types'
import AuthHelper from '@/helpers/auth.helper'
import { authMiddleware } from 'src/middlewares/auth.middleware'

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}`,
  prepareHeaders: async (headers) => {
    const token = AuthHelper.getToken(Tokens.AT)
    headers.set('Content-Type', 'application/json;charset=UTF-8')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const next = async () => baseQuery(args, api, extraOptions)
  const cb = async (endpoint: { url: string; method: string }) => {
    return baseQuery(endpoint, api, extraOptions)
  }
  let result = await next()
  if (result.error && result.error.status === 401) {
    await authMiddleware(cb)

    result = await next()
  }
  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Users'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
