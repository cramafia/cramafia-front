import { useMeeting, UseMeeting } from '@videosdk.live/react-sdk'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Video } from '../Video'

import { Container } from './Lobby.styles'

import { toggleLoaderState } from '@/reducers/global.reducer'

export const Lobby: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    meetingId,
    leave,
    toggleMic,
    toggleWebcam,
    participants,
  }: UseMeeting = useMeeting({
    onMeetingJoined: () => dispatch(toggleLoaderState(false)),
  })

  const onLeave = (): void => {
    leave()
    router
      .push('/game-search')
      .then(() => {})
      .catch(() => {})
  }

  useEffect(() => {
    dispatch(toggleLoaderState(true))
  }, [])

  return (
    <Container>
      <div>
        <div>
          <div onClick={onLeave}>LEAVE</div>
          <div onClick={toggleMic}>toggleMic</div>
          <div onClick={toggleWebcam}>toggleWebcam</div>
        </div>
        <h1>Meeting id is : {meetingId}</h1>
        {[...participants.keys()].map((id) => (
          <Video key={id} participantId={id} />
        ))}
      </div>
    </Container>
  )
}
