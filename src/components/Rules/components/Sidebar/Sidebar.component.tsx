import React, { useEffect, useState, SyntheticEvent } from 'react'
import {
  Wrapper,
  Content,
  Heading,
  List,
  ListItem,
  ListItemLink,
} from './Sidebar.styles'

export const Sidebar: React.FC = () => {
  const [isFixed, setFixed] = useState(false)
  const onScroll = (e: unknown) => {
    const scrollTop = e.target.scrollingElement.scrollTop //repaint

    if (scrollTop < 84) setFixed(false)
    if (scrollTop >= 84) setFixed(true)
  }
  const stopPropogation = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Wrapper onScroll={stopPropogation}>
      <Content isFixed={isFixed}>
        <Heading>Правила</Heading>
        <List>
          <ListItem>
            <ListItemLink href="#1">1 Основные понятия </ListItemLink>
          </ListItem>
        </List>
      </Content>
    </Wrapper>
  )
}
