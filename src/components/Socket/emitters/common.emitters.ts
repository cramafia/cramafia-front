import { Socket } from 'socket.io-client'
import { EventNameFactory } from '../event-name-factory'
import { EventName, EventNamePostfix } from '../types'

const _enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

const getLiveUsers = (socket: Socket) => {
  socket.emit(_enf.getEventName(EventName.GET_LIVE_USERS))
}

export { getLiveUsers }
