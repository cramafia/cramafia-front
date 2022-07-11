import { useSelector } from 'react-redux'
import { stateType } from 'src/redux/store'

export const useSocketEmitters = () => {
  const { socket } = useSelector((state: stateType) => state.global)

  const emit = (emitter: Function, data?: any) => {
    if (socket) {
      emitter(socket, data)
    }
  }

  return { emit }
}
