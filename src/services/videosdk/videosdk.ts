import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_VIDEOSDK_BASE_URL}`,
  prepareHeaders: async (headers) => {
    headers.set('Content-Type', 'application/json;charset=UTF-8')
    headers.set('Authorization', `${process.env.NEXT_PUBLIC_VIDEOSDK_TOKEN}`)
    return headers
  },
})

export const videosdkApi = createApi({
  reducerPath: 'videosdk',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    createMeeting: build.mutation<any, void>({
      query: () => ({
        url: 'api/meetings',
        method: 'POST',
      }),
    }),
    validateMeeting: build.mutation({
      query: (meetingId) => ({
        url: `api/meetings${meetingId}`,
        method: 'POST',
      }),
    }),
  }),
})
