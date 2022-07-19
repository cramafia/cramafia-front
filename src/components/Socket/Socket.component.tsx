import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { io, Socket as SocketClient } from 'socket.io-client'
import { connectSocket } from 'src/redux/reducers/global.reducer'

import { commonHandlers } from './handlers/common.handlers'
import { lobbiesHandlers } from './handlers/lobbies.handlers'

let socket: SocketClient | undefined

export const Socket: React.FC = () => {
  const dispatch = useDispatch()

  const socketInitializer = (): void => {
    if (socket) {
      commonHandlers(socket, dispatch)
      lobbiesHandlers(socket, dispatch)
    }
  }

  useEffect(() => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_API_URL ?? '')
      socketInitializer()
      dispatch(connectSocket(socket))
    }
  }, [])

  return <></>
}
