import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { Lobby } from '@/components/Lobby'
import { MeetingProvider } from '@videosdk.live/react-sdk'

import { Lobby as LobbyLayout } from '../../layouts/Lobby'
import { StateType } from 'src/redux/store'

const LobbyID: NextPage = () => {
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

export default LobbyID
