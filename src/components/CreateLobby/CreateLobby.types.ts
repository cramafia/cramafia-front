export interface LobbyProps {}

export interface LobbyStateType {
  gameType: OptionType
  activeSubOptions: SubOptionId[]
  gameName: string
  errorText: string
}
export interface OptionType {
  text: string
  type: OptionGameType
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

export enum OptionGameType {
  CLASSIC = 'CLASSIC',
  CUSTOM = 'CUSTOM',
}

export const getAllOptions = (): OptionType[] => {
  return Object.values(options)
}

export const getOption = (_gameType: OptionGameType): OptionType => {
  return options[_gameType]
}

const options: { [key in OptionGameType]: OptionType } = {
  [OptionGameType.CLASSIC]: {
    text: 'Классика',
    type: OptionGameType.CLASSIC,
    canEdit: [SubOptionId.PRIVATE],
    additionalText: 'Играйте по классическим правилам',
  },
  [OptionGameType.CUSTOM]: {
    text: 'Кастомная',
    type: OptionGameType.CUSTOM,
    canEdit: getAllSubOptionsIds(),
    additionalText: 'Играйте по кастомным правилам',
  },
}
