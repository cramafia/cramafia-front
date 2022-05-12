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
  CustomSpinner,
} from './styles'
import AuthHelper from '@/helpers/auth.helper'
import { useDispatch } from 'react-redux'
import { authorizeUser, setUser } from 'src/redux/reducers/global.reducer'
import { ButtonLink } from '@/components/ButtonLink'
import { stateType } from 'src/redux/store'

export const User: React.FC = () => {
  const dispatch = useDispatch()
  const [getMe, { data, isLoading }] = usersApi.useGetMeMutation()
  const user = useSelector((state: stateType) => state.global.user)

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
