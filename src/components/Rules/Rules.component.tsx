import React from 'react'
import { RulesContainer, Content } from './Rules.styles'
import { Sidebar } from './components/Sidebar'

export const Rules: React.FC = () => {
  return (
    <RulesContainer>
      <Sidebar />
      <Content></Content>
    </RulesContainer>
  )
}
