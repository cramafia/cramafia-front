/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'
import { Socket } from 'socket.io-client'
import { StateType } from 'src/redux/store'

interface ReturnType {
  emit: (emitter: Emitter, data?: any) => void
}
type Emitter = (socket: Socket, data?: any) => void

export const useSocketEmitters = (): ReturnType => {
  const { socket } = useSelector((state: StateType) => state.global)

  const emit = (emitter: Emitter, data?: any): void => {
    if (socket) {
      emitter(socket, data)
    }
  }

  return { emit }
}
