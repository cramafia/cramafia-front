import AuthHelper from '@/helpers/auth.helper'
import { Tokens } from '@/types/api.types'

export const authMiddleware = async (cb: Function) => {
  const { [Tokens.AT]: isExpAT, [Tokens.RT]: isExpRT } =
    AuthHelper.isExpiredBoth()
  if (isExpAT && !isExpRT) {
    const { data } = await cb({
      url: `auth/refresh-token/${AuthHelper.getToken(Tokens.RT)}`,
      method: 'POST',
    })
    if (data) {
      AuthHelper.setTokensFromData(data)
    }
  }

  if (isExpAT && isExpRT) {
    //TODO LOGOUT
  }
}
