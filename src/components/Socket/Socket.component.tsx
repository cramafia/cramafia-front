import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { io, Socket as SocketClient } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'

import { stateType } from 'src/redux/store'
import { connectSocket } from 'src/redux/reducers/global.reducer'
import { commonEvents } from './events/common-events'

let socket: SocketClient<DefaultEventsMap, DefaultEventsMap>

export const Socket = () => {
  const dispatch = useDispatch()
  const { socket: _socket } = useSelector((state: stateType) => state.global)
  useEffect(() => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_DEV_BASE_URL || '')
      socketInitializer()
      dispatch(connectSocket(socket))
    }
  }, [])

  const socketInitializer = async () => {
    commonEvents(socket, dispatch)
  }

  return <></>
}
