import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_VIDEOSDK_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json;charset=UTF-8')
    headers.set('Authorization', process.env.NEXT_PUBLIC_VIDEOSDK_TOKEN ?? '')

    return headers
  },
})

export const videosdkApi = createApi({
  reducerPath: 'videosdk',
  baseQuery,
  endpoints: (build) => ({
    createMeeting: build.mutation<void, void>({
      query: () => ({
        url: 'api/meetings',
        method: 'POST',
      }),
    }),
    validateMeeting: build.mutation({
      query: (meetingId: string) => ({
        url: `api/meetings${meetingId}`,
        method: 'POST',
      }),
    }),
  }),
})
