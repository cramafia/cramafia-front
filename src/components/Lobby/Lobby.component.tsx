import React, { useEffect } from 'react'

import { useMeeting } from '@videosdk.live/react-sdk'
import { useDispatch } from 'react-redux'

import { toggleLoaderState } from 'src/redux/reducers/global.reducer'
import { Video } from '../Video'
import { Container } from './Lobby.styles'

export const Lobby = () => {
  const dispatch = useDispatch()
  const {
    meetingId,
    leave,
    muteMic,
    unmuteMic,
    toggleMic,
    disableWebcam,
    enableWebcam,
    toggleWebcam,
    participants,
    end,
  } = useMeeting({
    onMeetingJoined: () => dispatch(toggleLoaderState(false)),
    onParticipantLeft: () => console.log('left'),
  })

  useEffect(() => {
    dispatch(toggleLoaderState(true))
  }, [])

  return (
    <Container>
      <div>
        <div>
          <button className={'button red'} onClick={leave}>
            LEAVE
          </button>
          <button className={'button blue'} onClick={toggleMic}>
            toggleMic
          </button>
          <button className={'button blue'} onClick={toggleWebcam}>
            toggleWebcam
          </button>
        </div>
        <h1>Meeting id is : {meetingId}</h1>
        {[...participants.keys()].map((id) => (
          <Video key={id} videoId={id} />
        ))}
      </div>
    </Container>
  )
}
