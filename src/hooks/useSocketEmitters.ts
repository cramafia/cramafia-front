import { useSelector } from 'react-redux'
import { Socket } from 'socket.io-client'
import { StateType } from 'src/redux/store'

interface ReturnType {
  emit: <D>(emitter: Emitter<D>, data?: D) => void
}

type Emitter<D> = (socket: Socket, data: D) => void

export const useSocketEmitters = (): ReturnType => {
  const { socket } = useSelector((state: StateType) => state.global)

  const emit = <D>(emitter: Emitter<D>, data?: D): void => {
    if (socket) {
      emitter(socket, data as D)
    }
  }

  return { emit }
}
