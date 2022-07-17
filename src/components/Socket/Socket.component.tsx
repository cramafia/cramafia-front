import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { io, Socket as SocketClient } from 'socket.io-client'

import { StateType } from 'src/redux/store'
import { connectSocket } from 'src/redux/reducers/global.reducer'
import { commonHandlers } from './handlers/common.handlers'
import { lobbiesHandlers } from './handlers/lobbies.handlers'

let socket: SocketClient

export const Socket = () => {
  const dispatch = useDispatch()
  const { socket: _socket } = useSelector((state: StateType) => state.global)

  const socketInitializer = () => {
    if (socket) {
      commonHandlers(socket, dispatch)
      lobbiesHandlers(socket, dispatch)
    }
  }

  useEffect(() => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_DEV_BASE_URL || '')
      socketInitializer()
      dispatch(connectSocket(socket))
    }
  }, [])

  return <></>
}
