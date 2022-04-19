import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Page } from 'src/layouts/Page'
import { CreateLobby } from '@/components/CreateLobby'

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
