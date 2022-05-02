import React from 'react'
import { useSelector } from 'react-redux'

import { UserInformationContainer, UserImage, UserName } from './styles'
import { usersApi } from '@/services/usersApi/users.api'

export const User: React.FC = () => {
  const { data: user } = usersApi.useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })
  return (
    <div>
      Мой профиль
      <UserInformationContainer>
        <UserImage src={user?.icon_url} />
        <UserName>{user?.username}</UserName>
      </UserInformationContainer>
    </div>
  )
}
