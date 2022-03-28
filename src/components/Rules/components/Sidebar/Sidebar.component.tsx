import React, { useEffect, useState, SyntheticEvent } from 'react'
import {
  Wrapper,
  Content,
  Heading,
  List,
  ListItem,
  ListItemLink,
} from './Sidebar.styles'
import { AnchorObjectType, AnchorType, getAnchors } from '../../anchors'
import { useSelector } from 'react-redux'
import { stateType } from 'src/redux/store'
import { useDispatch } from 'react-redux'
import { clearAnchors } from 'src/redux/reducers/rules.reducer'
import _ from 'lodash'

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch()
  const { anchors } = useSelector((state: stateType) => state.rules)
  const activeAnchor = anchors[0] || AnchorType.LIST_2_6
  const [isShow, toggleIsShow] = useState(true)
  const [isFixed, setFixed] = useState(false)

  const onScroll = (e: any) => {
    const scrollTop = e.target.scrollingElement.scrollTop //repaint
    const scrollTopMax = e.target.scrollingElement.scrollTopMax //repaint
    const clientHeight = e.target.scrollingElement.clientHeight //repaint

    if (scrollTopMax - scrollTop < clientHeight * 0.8) toggleIsShow(false)
    if (scrollTopMax - scrollTop >= clientHeight * 0.8) toggleIsShow(true)
    if (scrollTop < 84) setFixed(false)
    if (scrollTop >= 84) setFixed(true)
  }
  const stopPropogation = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  const onClick = (type: AnchorType) => {
    _.debounce(() => dispatch(clearAnchors(type)), 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Wrapper onScroll={stopPropogation}>
      {isShow && (
        <Content isFixed={isFixed}>
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
      )}
    </Wrapper>
  )
}
