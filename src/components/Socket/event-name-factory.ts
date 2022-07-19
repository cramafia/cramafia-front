import { EventName, EventNamePostfix } from './types'

export class EventNameFactory {
  private _postfix: EventNamePostfix
  constructor(postfix: EventNamePostfix) {
    this._postfix = postfix
  }

  getEventName(EN: EventName): string {
    return `${EN}${this._postfix}`
  }
}
