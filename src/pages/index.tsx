import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Page } from '../layouts/Page'

import { Main } from '@/components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <Main />
      </Page>
    </>
  )
}

export default Home
