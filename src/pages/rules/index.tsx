import React from 'react'
import { NextPage } from 'next'

import Head from 'next/head'

import { Page } from '../../layouts/Page'
import { Rules } from '@/components/Rules'

const RulesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | Rules</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Page>
        <Rules />
      </Page>
    </>
  )
}

export default RulesPage
