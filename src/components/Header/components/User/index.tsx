import React from 'react'
import { nanoid } from 'nanoid'

import { usersApi } from '@/services/usersApi/users.api'

import {
  UserContainer,
  UserImage,
  UserInformation,
  Option,
  UserName,
  OptionsContainer,
} from './styles'
import AuthHelper from '@/helpers/auth.helper'
import { useDispatch } from 'react-redux'
import { authorizeUser } from 'src/redux/reducers/global.reducer'

export const User: React.FC = () => {
  const dispatch = useDispatch()
  const { data: user } = usersApi.useGetMeQuery()
  const handleLogout = () => {
    AuthHelper.logout()
    dispatch(authorizeUser(false))
  }
  return (
    <UserContainer>
      <UserImage
        src={
          'https://steamuserimages-a.akamaihd.net/ugc/787481900791876899/F4E731EA0054E9CBB22DCA25A0778E48E5D81A20/'
        }
      />
      <UserInformation>
        <UserName id="dropdown-basic">{user?.username}</UserName>
        <OptionsContainer>
          <Option href="#/action-1">Мой профиль</Option>
          <Option onClick={handleLogout}>Выйти</Option>
        </OptionsContainer>
      </UserInformation>
    </UserContainer>
  )
}
