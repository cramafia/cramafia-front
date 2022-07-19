import _ from 'lodash'
import React, { SyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearAnchors } from 'src/redux/reducers/rules.reducer'
import { StateType } from 'src/redux/store'

import { AnchorObjectType, AnchorType, getAnchors } from '../../helpers/anchors'

import {
  Wrapper,
  Content,
  Heading,
  List,
  ListItem,
  ListItemLink,
} from './Sidebar.styles'

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { anchors } = useSelector((state: StateType) => state.rules)
  const activeAnchor = anchors.length ? anchors[0] : AnchorType.LIST_2_6

  const stopPropogation = (e: SyntheticEvent): void => {
    e.stopPropagation()
  }

  const onClick = (type: AnchorType): void => {
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
                onClick={() => onClick(type)}
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
