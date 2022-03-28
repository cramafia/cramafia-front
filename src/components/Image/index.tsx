import { ReactNode } from 'react'

import process_1 from '@/assets/images/process1.png'
import process_2 from '@/assets/images/process2.png'
import process_3 from '@/assets/images/process3.png'
import scoring_1 from '@/assets/images/scoring_01.png'
import scoring_2 from '@/assets/images/scoring_02.png'
import scoring_3 from '@/assets/images/scoring_03.png'
import scoring_4 from '@/assets/images/scoring_04.png'
import scoring_5 from '@/assets/images/scoring_05.png'
import scoring_6 from '@/assets/images/scoring_06.png'
import scoring_7 from '@/assets/images/scoring_07.png'
import speeches from '@/assets/images/speeches.png'
import voting from '@/assets/images/voting.png'
import player_speech from '@/assets/images/player-speech.png'
import browser_with_game from '@/assets/images/browser-with-game.png'
import first_night from '@/assets/images/first-night.png'
import positions from '@/assets/images/positions.png'
import { getImageSizeAsPixels, ImageSize } from '@/theme/layout'

export enum ImageType {
  PROCESS_1 = 'PROCESS_1',
  PROCESS_2 = 'PROCESS_2',
  PROCESS_3 = 'PROCESS_3',
  SCORING_1 = 'SCORING_1',
  SCORING_2 = 'SCORING_2',
  SCORING_3 = 'SCORING_3',
  SCORING_4 = 'SCORING_4',
  SCORING_5 = 'SCORING_5',
  SCORING_6 = 'SCORING_6',
  SCORING_7 = 'SCORING_7',
  SPEECHES = 'SPEECHES',
  VOTING = 'VOTING',
  PLAYER_SPEECH = 'PLAYER_SPEECH',
  BROWSER_WITH_GAME = 'BROWSER_WITH_GAME',
  FIRST_NIGHT = 'FIRST_NIGHT',
  POSITIONS = 'POSITIONS',
}

export interface ImageProps {
  src: string
  alt: string
}

export const getImage = (t: ImageType): ReactNode => {
  return <img {...images[t]} />
}

export const getImageWithSize = (t: ImageType, s: ImageSize): ReactNode => {
  return <img {...images[t]} width={getImageSizeAsPixels(s)} />
}

const images: { [key in ImageType]: ImageProps } = {
  [ImageType.SCORING_1]: {
    src: scoring_1.src,
    alt: 'scoring_1',
  },
  [ImageType.SCORING_2]: {
    src: scoring_2.src,
    alt: 'scoring_2',
  },
  [ImageType.SCORING_3]: {
    src: scoring_3.src,
    alt: 'scoring_3',
  },
  [ImageType.SCORING_4]: {
    src: scoring_4.src,
    alt: 'scoring_4',
  },
  [ImageType.SCORING_5]: {
    src: scoring_5.src,
    alt: 'scoring_5',
  },
  [ImageType.SCORING_6]: {
    src: scoring_6.src,
    alt: 'scoring_6',
  },
  [ImageType.SCORING_7]: {
    src: scoring_7.src,
    alt: 'scoring_7',
  },
  [ImageType.SPEECHES]: {
    src: speeches.src,
    alt: 'speeches',
  },
  [ImageType.VOTING]: {
    src: voting.src,
    alt: 'voting',
  },
  [ImageType.PLAYER_SPEECH]: {
    src: player_speech.src,
    alt: 'player-speech',
  },
  [ImageType.PROCESS_1]: {
    src: process_1.src,
    alt: 'process_1',
  },
  [ImageType.PROCESS_2]: {
    src: process_2.src,
    alt: 'process_2',
  },
  [ImageType.PROCESS_3]: {
    src: process_3.src,
    alt: 'process_3',
  },
  [ImageType.BROWSER_WITH_GAME]: {
    src: browser_with_game.src,
    alt: 'browser_with_game',
  },
  [ImageType.FIRST_NIGHT]: {
    src: first_night.src,
    alt: 'first_night',
  },
  [ImageType.POSITIONS]: {
    src: positions.src,
    alt: 'positions',
  },
}
