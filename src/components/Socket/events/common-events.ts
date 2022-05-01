import { Dispatch } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { setActiveUsers } from 'src/redux/reducers/socket.reducer'
import { EventNames } from './types'

export const commonEvents = (socket: Socket, dispatch: Dispatch) => {
  socket?.on(EventNames.GET_LIVE_USERS, (users: number) => {
    dispatch(setActiveUsers(users))
  })
}
