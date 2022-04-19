import type { NextPage } from 'next'
import Head from 'next/head'

import { _404 } from '@/components/_404'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cramafia | 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <_404 />
    </>
  )
}

export default NotFound
