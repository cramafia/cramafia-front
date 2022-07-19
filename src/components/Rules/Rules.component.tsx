import React from 'react'

import { ButtonScrollToTop } from '../ButtonScrollToTop'

import { RulesContainer, Content, Spacer, Relative } from './Rules.styles'
import { Anchor } from './components/Anchor'
import { Heading } from './components/Heading'
import { Sidebar } from './components/Sidebar'
import { blocks, BlockType } from './helpers/blocks'

export const Rules: React.FC = () => {
  return (
    <RulesContainer>
      <ButtonScrollToTop />
      <Sidebar />
      <Content>
        {blocks.map(({ id, spacer, anchor, heading, content }: BlockType) => (
          <Relative key={id}>
            {spacer && <Spacer />}
            <Anchor anchor={anchor} />
            {heading && <Heading anchor={anchor} />}
            {content && content}
          </Relative>
        ))}
      </Content>
    </RulesContainer>
  )
}
