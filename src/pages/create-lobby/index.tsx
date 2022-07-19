import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { CreateLobby } from '@/components/CreateLobby'
import { Page } from '@/layouts/Page'

const CreateLobbyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | Create Lobby</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <CreateLobby />
      </Page>
    </>
  )
}

export default CreateLobbyPage
