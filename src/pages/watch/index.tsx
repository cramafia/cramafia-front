import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Watch } from '../../components/Watch'
import { Page } from '../../layouts/Page'

export const WatchPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | Watch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <Watch />
      </Page>
    </>
  )
}

export default WatchPage
