import React from 'react'
import {
  MainContainer,
  Heading,
  SubHeading,
  Action,
  Spacer,
  Slogan,
  Processes,
  Process,
  Image,
  ProcessHeading,
  ProcessSubHeading,
} from './Main.styles'
import Process1 from '../../assets/images/process1.png'
import Process2 from '../../assets/images/process2.png'
import Process3 from '../../assets/images/process3.png'

export const Main: React.FC = () => {
  return (
    <MainContainer>
      <Slogan>ИГРАЙ. ДУМАЙ. ПОБЕЖДАЙ.</Slogan>
      <SubHeading>Регистрация аккаунта в пару кликов</SubHeading>
      <Action>Создать аккаунт в пару кликов</Action>
      <Spacer />
      <Heading>Играем по правилам классической мафии</Heading>
      <Spacer />
      <Processes>
        <Process>
          <Image src={Process1} alt="process1" />
          <ProcessHeading>
            Семь красных игроков, среди которых один шериф
          </ProcessHeading>
          <ProcessSubHeading>
            Задача красных (мирных) игроков и шерифа — найти и заголосовать
            мафию. Шериф просыпается каждую ночь и может проверить любого
            игрока.
          </ProcessSubHeading>
        </Process>
        <Process>
          <Image src={Process2} alt="process2" />
          <ProcessHeading>
            Три черных игрока, среди которых один дон
          </ProcessHeading>
          <ProcessSubHeading>
            Задача черных игроков (мафии) — запутать мирный город и вывести из
            игры красных игроков. Дон просыпается каждую ночь и может проверить
            любого игрока на шерифство.
          </ProcessSubHeading>
        </Process>
        <Process>
          <Image src={Process3} alt="process3" />
          <ProcessHeading>Средняя продолжительность игры</ProcessHeading>
          <ProcessSubHeading>
            У каждого игрока есть минута на объяснение своей позиции каждый
            круг, по итогам которого один игрок покидает игру.
          </ProcessSubHeading>
        </Process>
      </Processes>
      <Spacer />
      <Heading align="center">
        Испытай себя в игре, в которую уже играют 20 000 игроков. Создай аккаунт
        в два клика.
      </Heading>
      <SubHeading align="center">
        Тебе нужны только ПК, камера, микрофон и интернет.
      </SubHeading>
      <Action align="center">Создать аккаунт и играть</Action>
    </MainContainer>
  )
}
