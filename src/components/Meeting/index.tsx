import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
//@ts-ignore
import { MeetingProvider } from '@videosdk.live/react-sdk'

import { Lobby } from '@/components/Lobby'
import { StateType } from '@/store'
import { Lobby as LobbyLayout } from '../../layouts/Lobby'

const Meeting = () => {
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
          name: user?.username || 'Participant',
        }}
        token={process.env.NEXT_PUBLIC_VIDEOSDK_TOKEN}
        reinitialiseMeetingOnConfigChange={true}
        joinWithoutUserInteraction={true}
      >
        <Lobby />
      </MeetingProvider>
    </LobbyLayout>
  )
}

export default Meeting
