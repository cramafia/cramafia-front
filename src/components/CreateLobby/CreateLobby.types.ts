import { LobbyGameType } from '@/types/lobby.types'

export interface LobbyStateType {
  gameType: OptionType
  activeSubOptions: SubOptionId[]
  gameName: string
  errorText: string
}
export interface OptionType {
  text: string
  type: LobbyGameType
  canEdit: string[]
  additionalText: string
}
export enum SubOptionId {
  DOCTOR = 'DOCTOR',
  ALL_NOMINATED = 'ALL_NOMINATED',
  EVERY_NIGHT = 'EVERY_NIGHT',
  PRIVATE = 'PRIVATE',
}
export interface SubOptionType {
  id: SubOptionId
  text: string
}

export const getAllSubOptions = (): SubOptionType[] => {
  return Object.values(subOptions)
}

export const getAllSubOptionsIds = (): SubOptionId[] => {
  return getAllSubOptions().map(({ id }) => id)
}

const subOptions: { [key in SubOptionId]: SubOptionType } = {
  [SubOptionId.DOCTOR]: {
    id: SubOptionId.DOCTOR,
    text: 'Доктор присутствует в игре',
  },
  [SubOptionId.ALL_NOMINATED]: {
    id: SubOptionId.ALL_NOMINATED,
    text: 'Все кандидатуры выставлены',
  },
  [SubOptionId.EVERY_NIGHT]: {
    id: SubOptionId.EVERY_NIGHT,
    text: 'Мафия просыпается каждую ночь',
  },
  [SubOptionId.PRIVATE]: {
    id: SubOptionId.PRIVATE,
    text: 'Приватная',
  },
}

export const getAllOptions = (): OptionType[] => {
  return Object.values(options)
}

export const getOption = (_gameType: LobbyGameType): OptionType => {
  return options[_gameType]
}

const options: { [key in LobbyGameType]: OptionType } = {
  [LobbyGameType.CLASSIC]: {
    text: 'Классика',
    type: LobbyGameType.CLASSIC,
    canEdit: [SubOptionId.PRIVATE],
    additionalText: 'Играйте по классическим правилам',
  },
  [LobbyGameType.CUSTOM]: {
    text: 'Кастомная',
    type: LobbyGameType.CUSTOM,
    canEdit: getAllSubOptionsIds(),
    additionalText: 'Играйте по кастомным правилам',
  },
}
