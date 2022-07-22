/* eslint-disable no-console */
import { useParticipant } from '@videosdk.live/react-sdk'
import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { Props } from './Video.types'

export const Video: React.FC<Props> = ({ participantId }) => {
  const webcamRef = useRef<HTMLVideoElement>(null)
  const micRef = useRef<HTMLVideoElement>(null)
  const { displayName, webcamOn, micOn, isLocal } =
    useParticipant(participantId)
  const mediaStreams = useSelector(
    (state: StateType) => state.global.mediaStreams
  )

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn && mediaStreams.video) {
        const mediaStream = new MediaStream()

        mediaStream.addTrack(mediaStreams.video)

        webcamRef.current.srcObject = mediaStream
        webcamRef.current
          .play()
          .catch((error) =>
            console.error('videoElem.current.play() failed', error)
          )
      } else {
        webcamRef.current.srcObject = null
      }
    }
  }, [webcamOn, mediaStreams.video])

  useEffect(() => {
    if (micRef.current) {
      if (micOn && mediaStreams.audio) {
        const mediaStream = new MediaStream()

        mediaStream.addTrack(mediaStreams.audio)

        micRef.current.srcObject = mediaStream
        micRef.current
          .play()
          .catch((error) =>
            console.error('videoElem.current.play() failed', error)
          )
      } else {
        micRef.current.srcObject = null
      }
    }
  }, [micOn, mediaStreams.audio])

  return (
    <div>
      {displayName}
      <audio ref={micRef} autoPlay muted={isLocal} />
      <video height="100%" width="100%" ref={webcamRef} autoPlay />
    </div>
  )
}
