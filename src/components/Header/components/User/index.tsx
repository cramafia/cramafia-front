import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import {
  UserContainer,
  UserImage,
  UserInformation,
  Option,
  UserName,
  OptionsContainer,
  CustomSpinner,
} from './styles'

import { ButtonLink } from '@/components/ButtonLink'
import AuthHelper from '@/helpers/auth.helper'
import {
  authorizeUser,
  setUser,
  toggleSettingsState,
} from '@/reducers/global.reducer'
import { usersApi } from '@/services/usersApi/users.api'

export const User: React.FC = () => {
  const dispatch = useDispatch()
  const [getMe, { data, isLoading }] = usersApi.useGetMeMutation()
  const user = useSelector((state: StateType) => state.global.user)

  const handleLogout = (): void => {
    AuthHelper.logout()
    dispatch(authorizeUser(false))
    dispatch(setUser(null))
  }

  const handleOpenSettings = (): void => {
    dispatch(toggleSettingsState(true))
  }

  useEffect(() => {
    if (!user) {
      getMe()
        .then(() => {})
        .catch(() => {})
    }
  }, [])
  useEffect(() => {
    if (data) dispatch(setUser(data))
  }, [data])

  useEffect(() => {
    dispatch(setUser(user ?? null))
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
              <ButtonLink href={`/users/${user?.username ?? ''}`}>
                <Option>Мой профиль</Option>
              </ButtonLink>
              <Option onClick={handleOpenSettings}>Настройки</Option>
              <Option onClick={handleLogout}>Выйти</Option>
            </OptionsContainer>
          </UserInformation>
        </>
      )}
    </UserContainer>
  )
}
