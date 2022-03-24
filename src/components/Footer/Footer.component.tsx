import React, { FunctionComponent } from 'react'
import {
  BottomFooter,
  FooterContainer,
  TopFooter,
  FeedBackContainer,
  List,
  ListHeader,
  ListItem,
  Email,
  MessageButton,
  CheckButton,
  SocialLinks,
} from './Footer.styles'

import Instagram from '../../assets/icons/instagram.svg'
import Vk from '../../assets/icons/vk.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitch from '../../assets/icons/twitch.svg'
import Youtube from '../../assets/icons/youtube.svg'

export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <TopFooter>
        <span>LOGO</span>
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
        <ListItem>Пользовательское соглашение</ListItem>
        <ListItem>Конфиденциальность</ListItem>
        <ListItem>Контакты</ListItem>
        <SocialLinks>
          <Instagram />
          <Vk />
          <Telegram />
          <Facebook />
          <Twitch />
          <Youtube />
        </SocialLinks>
      </BottomFooter>
    </FooterContainer>
  )
}
