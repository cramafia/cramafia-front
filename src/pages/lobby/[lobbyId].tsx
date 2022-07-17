import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Meeting = dynamic(() => import('../../components/Meeting'), {
  ssr: false,
})

const LobbyID: NextPage = () => {
  return <Meeting />
}

export default LobbyID
