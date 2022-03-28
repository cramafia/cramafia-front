import React, { ReactNode } from 'react'

export enum AnchorType {
  BASIC = 'BASIC',
  LIST_1_1 = 'LIST_1_1',
  LIST_1_2 = 'LIST_1_2',
  LIST_1_3 = 'LIST_1_3',
  LIST_1_4 = 'LIST_1_4',
  LIST_1_5 = 'LIST_1_5',
  LIST_1_6 = 'LIST_1_6',
  LIST_1_7 = 'LIST_1_7',
  LIST_1_8 = 'LIST_1_8',
  LIST_2_1 = 'LIST_2_1',
  LIST_2_2 = 'LIST_2_2',
  LIST_2_3 = 'LIST_2_3',
  LIST_2_4 = 'LIST_2_4',
  LIST_2_5 = 'LIST_2_5',
  LIST_2_6 = 'LIST_2_6',
}

export type AnchorObjectType = {
  id: number
  title: string
  anchor: string
  type: AnchorType
}

export const getAnchor = (t: AnchorType): AnchorObjectType => {
  return anchors[t]
}

export const getAnchors = (): AnchorObjectType[] => {
  return Object.values(anchors)
}

export const sortByAnchorId = (arr: AnchorType[]) => {
  return arr.sort(
    (a: AnchorType, b: AnchorType) => getAnchor(a).id - getAnchor(b).id
  )
}

const anchors: { [key in AnchorType]: AnchorObjectType } = {
  [AnchorType.BASIC]: {
    id: 0,
    title: 'Базовая информация',
    anchor: 'basic',
    type: AnchorType.BASIC,
  },
  [AnchorType.LIST_1_1]: {
    id: 1,
    title: '1.1 Основные понятия',
    anchor: '1.1',
    type: AnchorType.LIST_1_1,
  },
  [AnchorType.LIST_1_2]: {
    id: 2,
    title: '1.2 Начало игры, раздача карт',
    anchor: '1.2',
    type: AnchorType.LIST_1_2,
  },
  [AnchorType.LIST_1_3]: {
    id: 3,
    title: '1.3 Первая игровая ночь',
    anchor: '1.3',
    type: AnchorType.LIST_1_3,
  },
  [AnchorType.LIST_1_4]: {
    id: 4,
    title: '1.4 Первый (или нулевой) день',
    anchor: '1.4',
    type: AnchorType.LIST_1_4,
  },
  [AnchorType.LIST_1_5]: {
    id: 5,
    title: '1.5 Речь игрока',
    anchor: '1.5',
    type: AnchorType.LIST_1_5,
  },
  [AnchorType.LIST_1_6]: {
    id: 6,
    title: '1.6 Голосование',
    anchor: '1.6',
    type: AnchorType.LIST_1_6,
  },
  [AnchorType.LIST_1_7]: {
    id: 7,
    title: '1.7 Переголосование и распил',
    anchor: '1.7',
    type: AnchorType.LIST_1_7,
  },
  [AnchorType.LIST_1_8]: {
    id: 8,
    title: '1.8 Вторая и последующие ночи',
    anchor: '1.8',
    type: AnchorType.LIST_1_8,
  },
  [AnchorType.LIST_2_1]: {
    id: 9,
    title: '2.1 Нарушения',
    anchor: '2.1',
    type: AnchorType.LIST_2_1,
  },
  [AnchorType.LIST_2_2]: {
    id: 10,
    title: '2.2 Нарушения, караемые техническим фолом',
    anchor: '2.2',
    type: AnchorType.LIST_2_2,
  },
  [AnchorType.LIST_2_3]: {
    id: 11,
    title: '2.3 Нарушения, караемые дисквалификацией',
    anchor: '2.3',
    type: AnchorType.LIST_2_3,
  },
  [AnchorType.LIST_2_4]: {
    id: 12,
    title: '2.4 Лучший ход',
    anchor: '2.4',
    type: AnchorType.LIST_2_4,
  },
  [AnchorType.LIST_2_5]: {
    id: 13,
    title: '2.5 Дисциплинарный комитет',
    anchor: '2.5',
    type: AnchorType.LIST_2_5,
  },
  [AnchorType.LIST_2_6]: {
    id: 14,
    title: '2.6 Скоринг',
    anchor: '2.6',
    type: AnchorType.LIST_2_6,
  },
}
