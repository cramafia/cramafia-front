import React from 'react'
import { LogoText } from 'src/styles'

import { getIcon, IconType } from '../Icon'

import {
  BottomFooter,
  FooterContainer,
  TopFooter,
  FeedBackContainer,
  List,
  ListHeader,
  ListItems,
  ListItem,
  Email,
  MessageButton,
  CheckButton,
  SocialLinks,
} from './Footer.styles'

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <TopFooter>
        <LogoText>CRAMAFIA</LogoText>
        <List>
          <ListHeader>Основное</ListHeader>
          <ListItem>Лобби</ListItem>
          <ListItem>MAFPROFI</ListItem>
        </List>
        <List>
          <ListHeader>Дополнительно</ListHeader>
          <ListItem>Трасляции</ListItem>
          <ListItem>Магазин</ListItem>
          <ListItem>Правила</ListItem>
        </List>
        <FeedBackContainer>
          <ListHeader>Обратная связь</ListHeader>
          <Email>daniilkhalupka@gmail.com</Email>
          <MessageButton variant="outline-dark">
            Написать сообщение
          </MessageButton>
          <ListItem>
            Вы можете написать нам об ошибках, внести свои предложения, а также
            по любым другим вопросам, связанным с проектом
          </ListItem>
          <CheckButton variant="outline-dark">Проверить устройства</CheckButton>
        </FeedBackContainer>
      </TopFooter>
      <BottomFooter>
        <ListItems>
          <ListItem>Пользовательское соглашение</ListItem>
          <ListItem>Конфиденциальность</ListItem>
          <ListItem>Контакты</ListItem>
        </ListItems>
        <SocialLinks>
          {getIcon(IconType.INSTAGRAM)()}
          {getIcon(IconType.VK)()}
          {getIcon(IconType.TELEGRAM)()}
          {getIcon(IconType.FACEBOOK)()}
          {getIcon(IconType.TWITCH)()}
          {getIcon(IconType.YOUTUBE)()}
        </SocialLinks>
      </BottomFooter>
    </FooterContainer>
  )
}
