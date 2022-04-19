import { baseApi } from '../base.api'
import { ResponseUserDto } from './dto/response-user.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiUrl } from '../apiUrl'

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
    createUser: build.mutation<ResponseUserDto, CreateUserDto>({
      query: (body) => ({
        url: apiUrl.get('create'),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})
