import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { Page } from 'src/layouts/Page'
import { GameSearch } from '@/components/GameSearch'

const GameSearchPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | Game Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <GameSearch />
      </Page>
    </>
  )
}

export default GameSearchPage
