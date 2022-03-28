import React from 'react'

import { Color } from '../../../../theme/color'

import { IconType } from '../../../Icon'
import { Container, Row, Col } from './Basic.styles'
import { IconText } from '../IconText'
import { Heading } from '../Heading'
import { Spacer } from '../../Rules.styles'

export const Basic: React.FC = () => {
  return (
    <Container>
      <Row>
        <IconText iconName={IconType.NETWORK}>
          Мафия — это интеллектуально-психологическая игра «через» веб-камеру
        </IconText>
        <IconText iconName={IconType.CAMERA}>
          Для игры требуется стабильное интернет-соединение и устройство с
          камерой и микрофоном
        </IconText>
        <IconText iconName={IconType.REWARD}>
          Для участия в турнирах нужно верифицировать аккаунт
        </IconText>
      </Row>
      <Heading text="Роли в игре" justify="center" />
      <Row>
        <IconText
          iconName={IconType.PEACE}
          title="Мирный"
          isBorder={true}
          borderColor={Color.RED_100}
        >
          Вы должны сделать все, чтобы вычислить и изжить Мафию из города путем
          общего дневного голосования.
        </IconText>
        <IconText
          iconName={IconType.SHERIFF}
          title="Шериф"
          isBorder={true}
          borderColor={Color.RED_100}
        >
          Представитель мирного города. Просыпается ночью и проверяет любого
          игрока на принадлежность к мафии.
        </IconText>
        <IconText
          iconName={IconType.DOCTOR}
          title="Доктор"
          isBorder={true}
          borderColor={Color.RED_100}
        >
          Представитель мирного города. Просыпается ночью и может спасти игрока
          убитого мафией.
        </IconText>
      </Row>
      <Spacer />
      <Row>
        <IconText iconName={IconType.MAFIA} title="Мафия" isBorder={true}>
          Представитель мирного города. Просыпается ночью и проверяет любого
          игрока на принадлежность к мафии.
        </IconText>
        <IconText iconName={IconType.DON} title="Дон" isBorder={true}>
          Представитель мирного города. Просыпается ночью и может спасти игрока
          убитого мафией.
        </IconText>
      </Row>
      <Spacer />
      <Heading text="На сайте строго запрещается" justify="center" />
      <Row>
        <IconText iconName={IconType.ALCOHOL}>
          Демонстрировать в камеру алкогольные напитки
        </IconText>
        <IconText iconName={IconType.OVER_18}>
          Демонстрировать в камеру порнографический контент
        </IconText>
        <IconText iconName={IconType.PROMOTION}>
          Демонстрировать в камеру рекламу сторонних ресурсов
        </IconText>
      </Row>
    </Container>
  )
}
