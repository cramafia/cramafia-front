declare module '@videosdk.live/react-sdk' {
  interface UseMeetingProps {
    onMeetingJoined: () => void
  }
  interface UseMeeting {
    meetingId: string
    participants: Map<Participant['id'], Participant>
    leave: () => void
    toggleMic: () => void
    toggleWebcam: () => void
  }
  interface Participant {
    displayName: string
    id: string
    local: boolean
    pinState: {
      cam: boolean
      share: boolean
    }
    quality: string
    streams: Map<Stream['id'], Stream<'audio' | 'video'>>
  }
  interface UseParticipant {
    displayName: string
    isActiveSpeaker: boolean
    isLocal: boolean
    isMainParticipant: boolean
    micOn: boolean
    participant: Participant
    pinState: {
      cam: boolean
      share: boolean
    }
    screenShareOn: boolean
    screenShareStream: unknown
    webcamOn: boolean
    webcamStream: Stream<'video'>
    micStream: Stream<'audio'>
    disableMic: () => void
    disableWebcam: () => void
    enableMic: () => void
    enableWebcam: () => void
  }
  interface Stream<K> {
    id: string
    kind: K
    track: MediaStreamTrack
    paused: boolean
  }
  const MeetingProvider
  const useMeeting: (props: UseMeetingProps) => UseMeeting
  const useParticipant: (id: Participant['id']) => UseParticipant
}

declare module 'react-awesome-loaders'
