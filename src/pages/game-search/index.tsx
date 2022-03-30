import React from 'react'
import { NextPage } from 'next'
import { Page } from 'src/layouts/Page'
import { GameSearch } from '@/components/GameSearch'

const GameSearchPage: NextPage = () => {
  return (
    <Page>
      <GameSearch />
    </Page>
  )
}

export default GameSearchPage
