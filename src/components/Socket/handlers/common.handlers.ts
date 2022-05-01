import { Dispatch } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { setActiveUsers } from 'src/redux/reducers/socket.reducer'
import { EventName, EventNamePostfix } from '../types'
import { EventNameFactory } from '../event-name-factory'

export const commonHandlers = (socket: Socket, dispatch: Dispatch) => {
  const _enf = new EventNameFactory(EventNamePostfix.HANDLER_POSTFIX)
  socket.on(_enf.getEventName(EventName.GET_LIVE_USERS), (users: number) => {
    dispatch(setActiveUsers(users))
  })
}
