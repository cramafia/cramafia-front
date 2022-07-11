import React, { useEffect, useState } from 'react'

import { useMeeting } from '@videosdk.live/react-sdk'

import { Video } from '../Video'
import { Container } from './Lobby.styles'

export const Lobby = () => {
  const [isLoading, toggleLoading] = useState(true)
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
  } = useMeeting()

  useEffect(() => {
    if (!isLoading) {
      toggleLoading(false)
    }
  }, [isLoading])
  useEffect(() => {
    end()
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
        {[...participants.keys()].map((p) => (
          <Video key={p} videoId={p} />
        ))}
      </div>
    </Container>
  )
}
