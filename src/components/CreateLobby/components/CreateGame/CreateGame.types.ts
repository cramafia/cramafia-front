import { OptionType } from '../../CreateLobby.types'

export interface CreateGameProps {
  gameType: OptionType
  gameName: string
  changeName: Function
  errorText: string
  onCreate: () => void
}
