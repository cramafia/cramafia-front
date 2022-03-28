import React from 'react'

import { ImageType } from '../Image'
import { AnchorType } from './anchors'
import { RulesContainer, Content, Spacer, Relative } from './Rules.styles'
import { Sidebar } from './components/Sidebar'
import { Heading } from './components/Heading'
import { Basic } from './components/Basic'
import { TextImage } from './components/TextImage'
import { ImageFloat } from './components/TextImage/TextImage.types'
import { Text } from './components/Text'
import { getText, TextType } from './texts'
import { ImageSize } from '@/theme/layout'
import { NumberedList } from './components/NumberedList'
import { getImageWithSize } from '../Image'
import { Anchor } from './components/Anchor'

export const Rules: React.FC = () => {
  return (
    <RulesContainer>
      <Sidebar />
      <Content>
        <Relative>
          <Anchor anchor={AnchorType.BASIC} />
          <Basic />
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_1} />
          <Heading anchor={AnchorType.LIST_1_1} />
          <TextImage
            imageName={ImageType.BROWSER_WITH_GAME}
            float={ImageFloat.LEFT}
          >
            {getText(TextType.TEXT_1_1)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_2} />
          <Heading anchor={AnchorType.LIST_1_2} />
          <Text>{getText(TextType.TEXT_1_2)}</Text>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_3} />
          <Heading anchor={AnchorType.LIST_1_3} />
          <TextImage imageName={ImageType.FIRST_NIGHT} float={ImageFloat.LEFT}>
            {getText(TextType.TEXT_1_3)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_4} />
          <Heading anchor={AnchorType.LIST_1_4} />
          <TextImage
            imageName={ImageType.POSITIONS}
            float={ImageFloat.NONE}
            imageSize={ImageSize.XLARGE}
          >
            {getText(TextType.TEXT_1_4)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_5} />
          <Heading anchor={AnchorType.LIST_1_5} />
          <TextImage
            imageName={ImageType.PLAYER_SPEECH}
            float={ImageFloat.RIGHT}
          >
            {getText(TextType.TEXT_1_5)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_6} />
          <Heading anchor={AnchorType.LIST_1_6} />
          <TextImage imageName={ImageType.VOTING} float={ImageFloat.LEFT}>
            {getText(TextType.TEXT_1_6)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_7} />
          <Heading anchor={AnchorType.LIST_1_7} />
          <Text>{getText(TextType.TEXT_1_7)}</Text>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_1_8} />
          <Heading anchor={AnchorType.LIST_1_8} />
          <TextImage imageName={ImageType.SPEECHES} float={ImageFloat.LEFT}>
            {getText(TextType.TEXT_1_8)}
          </TextImage>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_1} />
          <Heading anchor={AnchorType.LIST_2_1} />
          <NumberedList text={getText(TextType.TEXT_2_1)} />
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_2} />
          <Heading anchor={AnchorType.LIST_2_2} />
          <NumberedList text={getText(TextType.TEXT_2_2)} />
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_3} />
          <Heading anchor={AnchorType.LIST_2_3} />
          <NumberedList text={getText(TextType.TEXT_2_3)} />
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_4} />
          <Heading anchor={AnchorType.LIST_2_4} />
          <Text>{getText(TextType.TEXT_2_4)}</Text>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_5} />
          <Heading anchor={AnchorType.LIST_2_5} />
          <Text>{getText(TextType.TEXT_2_5)}</Text>
        </Relative>
        <Relative>
          <Spacer />
          <Anchor anchor={AnchorType.LIST_2_6} />
          <Heading anchor={AnchorType.LIST_2_6} />
          {getImageWithSize(ImageType.SCORING_1, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_2, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_3, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_4, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_5, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_6, ImageSize.XXLARGE)}
          {getImageWithSize(ImageType.SCORING_7, ImageSize.XXLARGE)}
        </Relative>
      </Content>
    </RulesContainer>
  )
}
