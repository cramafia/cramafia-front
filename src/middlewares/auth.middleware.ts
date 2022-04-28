import jwt_decode from 'jwt-decode'
import { DateTime } from 'luxon'

import { authApi } from 'src/services/authApi/auth.api'

export const authMiddleware = (api: any) => (next: any) => (action: any) => {
  let isPending = action.type
    .split('/')
    .filter((item: string) => item === 'pending').length
  if (isPending) {
    let curDate = DateTime.now().toSeconds()
    let acess_token = localStorage.getItem('refresh_token')
    let { exp: expDateAccess }: { exp: number } = jwt_decode(acess_token || '')

    if (curDate > expDateAccess) {
      localStorage.removeItem('access_token')
    } else {
      let refresh_token: any = localStorage.getItem('refresh_token')
      let { exp: expDateRefresh }: { exp: number } = jwt_decode(
        refresh_token || ''
      )
      if (curDate > expDateRefresh) {
        localStorage.removeItem('refresh_token')
      } else {
        try {
          const data = authApi.endpoints.refresh_token.useQuery(refresh_token)
          console.log(data)
          localStorage.setItem('access_token', '123')
          localStorage.setItem('refresh_token', '321')
        } catch (e) {
          console.log(e)
        }
        console.log(refresh_token)
        console.log(321)
      }
    }
  }
  return next(action)
}
