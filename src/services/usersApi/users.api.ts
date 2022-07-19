import { ApiUrl } from '../apiUrl'
import { AuthDto } from '../authApi/dto/auth.dto'
import { baseApi } from '../base.api'

import { ResponseUserDto } from './dto/response-user.dto'

const apiUrl = new ApiUrl('users')

export enum UsersEndpoints {
  GET_ALL_USERS = 'getAllUsers',
  GET_USER = 'getUser',
  GET_ME = 'getMe',
  CREATE_USER = 'createUser',
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    [UsersEndpoints.GET_ALL_USERS]: build.query<ResponseUserDto[], void>({
      query: () => ({
        url: apiUrl.get('all'),
      }),
      providesTags: ['Users'],
    }),
    [UsersEndpoints.GET_USER]: build.query<ResponseUserDto, string>({
      query: (username: string) => ({
        url: apiUrl.get(`${username}`),
      }),
    }),
    [UsersEndpoints.GET_ME]: build.mutation<ResponseUserDto, void>({
      query: () => ({
        url: apiUrl.get('me'),
      }),
    }),
    [UsersEndpoints.CREATE_USER]: build.mutation<ResponseUserDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('create'),
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})
