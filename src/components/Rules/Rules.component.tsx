import React from 'react'

import { RulesContainer, Content, Spacer, Relative } from './Rules.styles'
import { Sidebar } from './components/Sidebar'
import { Heading } from './components/Heading'
import { Anchor } from './components/Anchor'
import { blocks, BlockType } from './helpers/blocks'

export const Rules: React.FC = () => {
  return (
    <RulesContainer>
      <Sidebar />
      <Content>
        {blocks.map(({ id, spacer, anchor, heading, content }: BlockType) => (
          <Relative key={id}>
            {spacer && <Spacer />}
            {anchor && <Anchor anchor={anchor} />}
            {heading && <Heading anchor={anchor} />}
            {content && content}
          </Relative>
        ))}
      </Content>
    </RulesContainer>
  )
}
