import React from 'react'
import { NextPage } from 'next'
import { Page } from 'src/layouts/Page'
import { Lobby } from '@/components/Lobby'

const GameSearchPage: NextPage = () => {
  return (
    <Page>
      <Lobby />
    </Page>
  )
}

export default GameSearchPage
