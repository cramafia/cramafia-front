import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { io, Socket as SocketClient } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'

import { stateType } from 'src/redux/store'
import { connectSocket } from 'src/redux/reducers/global.reducer'
import { setActiveUsers } from 'src/redux/reducers/socket.reducer'

let socket: SocketClient<DefaultEventsMap, DefaultEventsMap>

export const Socket = () => {
  const dispatch = useDispatch()
  const { socket: _socket } = useSelector((state: stateType) => state.global)
  useEffect(() => {
    if (!socket) {
      socket = io('https://cramafia-api-dev.herokuapp.com/')
      socketInitializer()
      dispatch(connectSocket(socket))
    }
  }, [])

  useEffect(() => {
    if (_socket) {
      _socket.emit('getLiveUsersToServer')
    }
  }, [_socket])

  const socketInitializer = async () => {
    socket?.on('getLiveUsersToClient', (users: number) => {
      dispatch(setActiveUsers(users))
    })
  }
  return <></>
}
