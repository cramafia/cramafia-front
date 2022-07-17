import { OptionType, SubOptionId } from '../../CreateLobby.types'

export interface SubOptionProps {
  text: string
  gameType: OptionType
  activeSubOptions: SubOptionId[]
  id: SubOptionId
  onClick: Function
}
