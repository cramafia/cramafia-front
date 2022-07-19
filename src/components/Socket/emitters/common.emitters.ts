import { Socket } from 'socket.io-client'

import { EventNameFactory } from '../event-name-factory'
import { EventName, EventNamePostfix } from '../types'

const enf = new EventNameFactory(EventNamePostfix.EMITTER_POSTFIX)

const getLiveUsers = (socket: Socket): void => {
  socket.emit(enf.getEventName(EventName.GET_LIVE_USERS))
}

export { getLiveUsers }
