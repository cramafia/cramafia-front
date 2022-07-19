import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { NotFoundComponent } from '@/components/404'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NotFoundComponent />
    </>
  )
}

export default NotFound
