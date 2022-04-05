import React from 'react'
import streams from '@/constants/streams.json'
import {
  Stream,
  StreamIcon,
  UserContainer,
  UserIcon,
  StreamInformation,
  StreamName,
  UserName,
} from './Streams.styles'
import { nanoid } from 'nanoid'

export const Streams: React.FC = () => {
  return (
    <>
      {streams.content.map(
        ({ userName, userIcon, streamnName, streamIcon }) => (
          <Stream key={nanoid()}>
            <StreamIcon src={streamIcon} />
            <UserContainer>
              <UserIcon src={userIcon} />
              <StreamInformation>
                <StreamName>{streamnName}</StreamName>
                <UserName>{userName}</UserName>
              </StreamInformation>
            </UserContainer>
          </Stream>
        )
      )}
    </>
  )
}
