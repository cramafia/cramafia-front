import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { UserInformationContainer, UserImage, UserName } from './styles'
import { usersApi } from '@/services/usersApi/users.api'
import { stateType } from 'src/redux/store'
import { useRouter } from 'next/router'

export const User: React.FC = () => {
  const { username } = useRouter().query
  const { data } = usersApi.useGetUserQuery(username as string)
  const isAuthorized = useSelector(
    (state: stateType) => state.global.isAuthorized
  )

  return (
    <div>
      {isAuthorized ? (
        <>
          <span>Мой профиль</span>
          <UserInformationContainer>
            <UserImage src={data?.icon_url} />
            <UserName>{data?.username}</UserName>
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
