import { Dispatch } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { setActiveUsers } from 'src/redux/reducers/socket.reducer'

import { EventNameFactory } from '../event-name-factory'
import { EventName, EventNamePostfix } from '../types'

export const commonHandlers = (socket: Socket, dispatch: Dispatch): void => {
  const enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)

  socket.on(enf.getEventName(EventName.GET_LIVE_USERS), (users: number) => {
    dispatch(setActiveUsers(users))
  })
}
