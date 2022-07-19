import { MeetingProvider } from '@videosdk.live/react-sdk'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'

import { Lobby as LobbyLayout } from '../../layouts/Lobby'

import { Lobby } from '@/components/Lobby'

const Meeting: React.FC = () => {
  const user = useSelector((state: StateType) => state.global.user)
  const router = useRouter()
  const { lobbyId } = router.query

  return (
    <LobbyLayout>
      <MeetingProvider
        config={{
          meetingId: lobbyId,
          micEnabled: true,
          webcamEnabled: true,
          name: user?.username ?? 'Participant',
        }}
        token={process.env.NEXT_PUBLIC_VIDEOSDK_TOKEN}
        reinitialiseMeetingOnConfigChange
        joinWithoutUserInteraction
      >
        <Lobby />
      </MeetingProvider>
    </LobbyLayout>
  )
}

export default Meeting
