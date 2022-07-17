import React, { useRef, useEffect } from 'react'
//@ts-ignore
import { useParticipant } from '@videosdk.live/react-sdk'

export const Video = ({ videoId }: { videoId: string }) => {
  const webcamRef = useRef<HTMLVideoElement>(null)
  const micRef = useRef<HTMLVideoElement>(null)
  const { displayName, webcamStream, micStream, webcamOn, micOn, isLocal } =
    useParticipant(videoId)

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream()
        mediaStream.addTrack(webcamStream.track)

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
  }, [webcamStream, webcamOn])

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream()
        mediaStream.addTrack(micStream.track)

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
  }, [micStream, micOn])

  return (
    <div>
      {displayName}
      <audio ref={micRef} autoPlay muted={isLocal} />
      <video height={'100%'} width={'100%'} ref={webcamRef} autoPlay />
    </div>
  )
}
