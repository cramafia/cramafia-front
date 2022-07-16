import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { usersApi } from '@/services/usersApi/users.api'
import AuthHelper from '@/helpers/auth.helper'
import { ButtonLink } from '@/components/ButtonLink'

import {
  UserContainer,
  UserImage,
  UserInformation,
  Option,
  UserName,
  OptionsContainer,
  CustomSpinner,
} from './styles'

import { authorizeUser, setUser } from 'src/redux/reducers/global.reducer'

export const User: React.FC = () => {
  const dispatch = useDispatch()

  const [getMe, { data: user, isLoading }] = usersApi.useGetMeMutation()

  const handleLogout = () => {
    AuthHelper.logout()
    dispatch(authorizeUser(false))
    dispatch(setUser(null))
  }

  useEffect(() => {
    getMe()
  }, [])

  useEffect(() => {
    dispatch(setUser(user || null))
  }, [user])

  return (
    <UserContainer>
      {isLoading ? (
        <CustomSpinner animation="border" variant="info" />
      ) : (
        <>
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
        </>
      )}
    </UserContainer>
  )
}
