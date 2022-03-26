import type { NextPage } from 'next'
import React from 'react'
import { Watch } from '../../components/Watch'
import { Page } from '../../layouts/Page'

export const WatchPage: NextPage = () => {
  return (
    <Page>
      <Watch />
    </Page>
  )
}

export default WatchPage
