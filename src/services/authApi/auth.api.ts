import { baseApi } from '../base.api'
import { ApiUrl } from '../apiUrl'
import { AuthDto } from './dto/auth.dto'
import { AuthResponseDto } from './dto/authResponse.dto'

const apiUrl = new ApiUrl('auth')

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponseDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('login'),
        method: 'POST',
        body,
      }),
    }),
    registration: build.mutation<AuthResponseDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('registration'),
        method: 'POST',
        body,
      }),
    }),
    refresh_token: build.query<AuthResponseDto, string>({
      query: (refresh_token: string) => ({
        url: apiUrl.get(`refresh-token/${refresh_token}`),
      }),
    }),
  }),
})
