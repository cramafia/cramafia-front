import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { usersApi } from '@/services/usersApi/users.api'
import AuthHelper from '@/helpers/auth.helper'
import { authorizeUser, setUser } from '@/reducers/global.reducer'
import { StateType } from '@/store'
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

export const User: React.FC = () => {
  const dispatch = useDispatch()
  const [getMe, { data, isLoading }] = usersApi.useGetMeMutation()
  const user = useSelector((state: StateType) => state.global.user)

  const handleLogout = () => {
    AuthHelper.logout()
    dispatch(authorizeUser(false))
    dispatch(setUser(null))
  }

  useEffect(() => {
    if (!user) {
      getMe()
    }
  }, [])
  useEffect(() => {
    if (data) dispatch(setUser(data))
  }, [data])

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
              <ButtonLink href={`users/${user?.username}`}>
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
