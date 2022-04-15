import { OptionType } from './../../Lobby.types'

export interface OptionProps {
  text: string
  currentGameType: OptionType
  setCurrentGame?: Function
  gameType?: string
}
