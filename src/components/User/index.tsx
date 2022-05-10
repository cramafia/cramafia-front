import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { UserInformationContainer, UserImage, UserName } from './styles'
import { usersApi } from '@/services/usersApi/users.api'
import { stateType } from 'src/redux/store'

export const User: React.FC = () => {
  const [getMe, { data: user }] = usersApi.useGetMeMutation()
  const isAuthorized = useSelector(
    (state: stateType) => state.global.isAuthorized
  )
  useEffect(() => {
    getMe()
  }, [isAuthorized])
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
