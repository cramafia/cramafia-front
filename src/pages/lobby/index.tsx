import React from 'react'
import { NextPage } from 'next'

import { Page } from 'src/layouts/Page'
import { CreateLobby } from '@/components/CreateLobby'

const GameSearchPage: NextPage = () => {
  return (
    <Page>
      <CreateLobby />
    </Page>
  )
}

export default GameSearchPage
