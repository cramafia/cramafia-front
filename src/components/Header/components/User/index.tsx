import React from 'react'

import { UserContainer, UserImage, UserInformation, Option } from './styles'

export const User: React.FC = () => {
  return (
    <UserContainer>
      <UserImage
        src={
          'https://steamuserimages-a.akamaihd.net/ugc/787481900791876899/F4E731EA0054E9CBB22DCA25A0778E48E5D81A20/'
        }
      />
      <UserInformation title="user name" variant="danger">
        <Option href="#/action-1">Мой профиль</Option>
        <Option href="#/action-2">Выйти</Option>
      </UserInformation>
    </UserContainer>
  )
}
