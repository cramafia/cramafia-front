import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { usersApi } from '@/services/usersApi/users.api'
import { StateType } from 'src/redux/store'
import { UserInformationContainer, UserImage, UserName } from './styles'

export const User: React.FC = () => {
  const { username } = useRouter().query
  const { data: user } = usersApi.useGetUserQuery(username as string)
  const isAuthorized = useSelector(
    (state: StateType) => state.global.isAuthorized
  )

  return (
    <div>
      {isAuthorized ? (
        <>
          <span>Мой профиль</span>
          <UserInformationContainer>
            <UserImage src={user?.icon_url} />
            <UserName>{user?.username}</UserName>
          </UserInformationContainer>
        </>
      ) : (
        <>
          <span>Not Authorized</span>
        </>
      )}
    </div>
  )
}
