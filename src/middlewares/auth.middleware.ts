import jwt_decode from 'jwt-decode'
import { DateTime } from 'luxon'

import { authApi } from 'src/services/authApi/auth.api'

export const authMiddleware = (api: any) => (next: any) => (action: any) => {
  console.log(api, action)
  let isPending = action.type
    .split('/')
    .filter((item: string) => item === 'pending').length
  if (isPending) {
    let curDate = DateTime.now().toSeconds()
    let acess_token: any = localStorage.getItem('access_token')
    let expDateAccess: number = jwt_decode(acess_token.exp)
    if (curDate > expDateAccess) {
      localStorage.removeItem('access_token')
    } else {
      let refresh_token: any = localStorage.getItem('refresh_token')
      let expDateRefresh: number = jwt_decode(acess_token.exp)
      if (curDate > expDateRefresh) {
        localStorage.removeItem('refresh_token')
      } else {
        const { data: token } = authApi.useRefresh_tokenQuery('refresh_token')
        localStorage.addItem('access_token', token?.access_token)
        localStorage.addItem('refresh_token', token?.refresh_token)
      }
    }
  }
  return next(action)
}
