import { baseApi } from '../base.api'
import { ResponseUserDto } from './dto/response-user.dto'
import { ApiUrl } from '../apiUrl'
import { AuthDto } from '../authApi/dto/auth.dto'

const apiUrl = new ApiUrl('users')

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<ResponseUserDto[], void>({
      query: () => ({
        url: apiUrl.get('all'),
      }),
      providesTags: ['Users'],
    }),
    getUser: build.query<ResponseUserDto, string>({
      query: (username: string) => ({
        url: apiUrl.get(`/${username}`),
      }),
    }),
    getMe: build.query<ResponseUserDto, void>({
      query: () => ({
        url: apiUrl.get('me'),
      }),
    }),
    createUser: build.mutation<ResponseUserDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('create'),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})
