import React, { SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'

import { stateType } from 'src/redux/store'
import {
  Wrapper,
  Content,
  Heading,
  List,
  ListItem,
  ListItemLink,
} from './Sidebar.styles'
import { AnchorObjectType, AnchorType, getAnchors } from '../../helpers/anchors'

import { clearAnchors } from 'src/redux/reducers/rules.reducer'

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { anchors } = useSelector((state: stateType) => state.rules)
  const activeAnchor = anchors[0] || AnchorType.LIST_2_6

  const stopPropogation = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const onClick = (type: AnchorType) => {
    _.debounce(() => dispatch(clearAnchors(type)), 100)
  }

  return (
    <Wrapper onScroll={stopPropogation}>
      <Content>
        <Heading>Правила</Heading>
        <List>
          {getAnchors().map(({ title, anchor, type }: AnchorObjectType) => (
            <ListItem key={anchor}>
              <ListItemLink
                onClick={onClick.bind(this, type)}
                href={`#${anchor}`}
                active={activeAnchor === type}
              >
                {title}
              </ListItemLink>
            </ListItem>
          ))}
        </List>
      </Content>
    </Wrapper>
  )
}
