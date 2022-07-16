import { baseApi } from '../base.api'
import { ApiUrl } from '../apiUrl'
import { AuthDto } from './dto/auth.dto'
import { AuthResponseDto } from './dto/authResponse.dto'

const apiUrl = new ApiUrl('auth')

export enum AuthEndpoints {
  LOGIN = 'login',
  REGISTRATION = 'registration',
  REFRESH_TOKEN = 'refresh_token',
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    [AuthEndpoints.LOGIN]: build.mutation<AuthResponseDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('login'),
        method: 'POST',
        body,
      }),
    }),
    [AuthEndpoints.REGISTRATION]: build.mutation<AuthResponseDto, AuthDto>({
      query: (body) => ({
        url: apiUrl.get('registration'),
        method: 'POST',
        body,
      }),
    }),
  }),
})
