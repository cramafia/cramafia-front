import { NextPage } from 'next'
import React from 'react'

import { User } from '@/components/User'
import { Page } from '@/layouts/Page'

const UserPage: NextPage = () => {
  return (
    <Page>
      <User />
    </Page>
  )
}

export default UserPage
