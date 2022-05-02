import React, { useEffect } from 'react'
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
import { authorizeUser, setUser } from 'src/redux/reducers/global.reducer'
import { ButtonLink } from '@/components/ButtonLink'

export const User: React.FC = () => {
  const dispatch = useDispatch()
  const { data: user } = usersApi.useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })
  const handleLogout = () => {
    AuthHelper.logout()
    dispatch(authorizeUser(false))
    dispatch(setUser(null))
  }
  useEffect(() => {
    dispatch(setUser(user || null))
  }, [])

  return (
    <UserContainer>
      <UserImage src={user?.icon_url} />
      <UserInformation>
        <UserName>{user?.username}</UserName>
        <OptionsContainer>
          <ButtonLink href={`user`}>
            <Option>Мой профиль</Option>
          </ButtonLink>
          <Option onClick={handleLogout}>Выйти</Option>
        </OptionsContainer>
      </UserInformation>
    </UserContainer>
  )
}
