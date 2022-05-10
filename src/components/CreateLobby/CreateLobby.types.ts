export interface LobbyProps {}

export interface OptionType {
  text: string
  type: string
  canEdit: string[]
  additionalText: string
}
export enum SubOptionId {
  DOCTOR = 'DOCTOR',
  ALL_NOMINATED = 'ALL_NOMINATED',
  EVERY_NIGHT = 'EVERY_NIGHT',
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
}

export enum OptionGameType {
  CLASSIC = 'CLASSIC',
  CUSTOM = 'CUSTOM',
  PRIVATE = 'PRIVATE',
}

const options: { [key in OptionGameType]: OptionType } = {
  [OptionGameType.CLASSIC]: {
    text: 'Классика',
    type: 'classic',
    canEdit: [],
    additionalText: 'Играйте по классическим правилам',
  },
  [OptionGameType.CUSTOM]: {
    text: 'Кастомная',
    type: 'custom',
    canEdit: getAllSubOptionsIds(),
    additionalText: 'Играйте по кастомным правилам',
  },
  [OptionGameType.PRIVATE]: {
    text: 'Приватная',
    type: 'private',
    canEdit: getAllSubOptionsIds(),
    additionalText: 'Закрытое лобби',
  },
}

export const getAllOptions = (): OptionType[] => {
  return Object.values(options)
}

export const getOption = (_gameType: OptionGameType): OptionType => {
  return options[_gameType]
}
