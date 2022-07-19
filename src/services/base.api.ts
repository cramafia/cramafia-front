import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query/react'

// eslint-disable-next-line import/no-cycle
import { authMiddleware, CbProps } from '../middlewares/auth.middleware'

import AuthHelper from '@/helpers/auth.helper'
import { Tokens } from '@/types/api.types'

export type ReturnBaseQuery = QueryReturnValue<
  unknown,
  FetchBaseQueryError,
  FetchBaseQueryMeta
>

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers: Headers) => {
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
  const next = async (): Promise<ReturnBaseQuery> =>
    baseQuery(args, api, extraOptions)
  const cb = async (endpoint: CbProps): Promise<ReturnBaseQuery> =>
    baseQuery(endpoint, api, extraOptions)

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
