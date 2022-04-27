import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_DEV_BASE_URL}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      headers.set('Content-Type', 'application/json;charset=UTF-8')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
})
