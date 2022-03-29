import { ReactNode } from 'react'
import { nanoid } from 'nanoid'

import { ImageType } from '@/components/Image'
import { ImageSize } from '@/theme/layout'

import { ImageFloat } from '../components/TextImage/TextImage.types'
import { getText, TextType } from './texts'
import { Basic } from '../components/Basic'
import { TextImage } from '../components/TextImage'
import { Text } from '../components/Text'
import { AnchorType } from './anchors'
import { Scorring } from '../components/Scorring'

export interface BlockType {
  id: string
  spacer: boolean
  anchor: AnchorType
  heading: boolean
  content: ReactNode
}

export const blocks: BlockType[] = [
  {
    id: nanoid(),
    spacer: false,
    anchor: AnchorType.BASIC,
    heading: false,
    content: <Basic />,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_1,
    heading: true,
    content: (
      <TextImage
        imageName={ImageType.BROWSER_WITH_GAME}
        float={ImageFloat.LEFT}
      >
        {getText(TextType.TEXT_1_1)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_2,
    heading: true,
    content: <Text>{getText(TextType.TEXT_1_2)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_3,
    heading: true,
    content: (
      <TextImage imageName={ImageType.FIRST_NIGHT} float={ImageFloat.LEFT}>
        {getText(TextType.TEXT_1_3)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_4,
    heading: true,
    content: (
      <TextImage
        imageName={ImageType.POSITIONS}
        float={ImageFloat.NONE}
        imageSize={ImageSize.XLARGE}
      >
        {getText(TextType.TEXT_1_4)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_5,
    heading: true,
    content: (
      <TextImage imageName={ImageType.PLAYER_SPEECH} float={ImageFloat.RIGHT}>
        {getText(TextType.TEXT_1_5)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_6,
    heading: true,
    content: (
      <TextImage imageName={ImageType.VOTING} float={ImageFloat.LEFT}>
        {getText(TextType.TEXT_1_6)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_7,
    heading: true,
    content: <Text>{getText(TextType.TEXT_1_7)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_1_8,
    heading: true,
    content: (
      <TextImage imageName={ImageType.SPEECHES} float={ImageFloat.LEFT}>
        {getText(TextType.TEXT_1_8)}
      </TextImage>
    ),
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_1,
    heading: true,
    content: <Text>{getText(TextType.TEXT_2_1)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_2,
    heading: true,
    content: <Text>{getText(TextType.TEXT_2_2)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_3,
    heading: true,
    content: <Text>{getText(TextType.TEXT_2_3)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_4,
    heading: true,
    content: <Text>{getText(TextType.TEXT_2_4)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_5,
    heading: true,
    content: <Text>{getText(TextType.TEXT_2_5)}</Text>,
  },
  {
    id: nanoid(),
    spacer: true,
    anchor: AnchorType.LIST_2_6,
    heading: true,
    content: <Scorring />,
  },
]
