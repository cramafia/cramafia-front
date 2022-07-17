import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

export const useSocketEmitters = () => {
  const { socket } = useSelector((state: StateType) => state.global)

  const emit = (emitter: Function, data?: any) => {
    if (socket) {
      emitter(socket, data)
    }
  }

  return { emit }
}
