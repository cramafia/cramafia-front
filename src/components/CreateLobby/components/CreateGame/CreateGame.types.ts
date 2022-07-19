import { OptionType } from '../../CreateLobby.types'

export interface CreateGameProps {
  gameType: OptionType
  gameName: string
  changeName: (v: string) => void
  errorText: string
  onCreate: () => void
}
