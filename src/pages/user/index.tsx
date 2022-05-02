import React from 'react'
import { NextPage } from 'next'

import { Page } from 'src/layouts/Page'
import { User } from '@/components/User'

const UserPage: NextPage = () => {
  return (
    <Page>
      <User />
    </Page>
  )
}

export default UserPage
