import React from 'react'
import { NextPage } from 'next'

import { Page } from '../../layouts/Page'
import { Rules } from '@/components/Rules'

const RulesPage: NextPage = () => {
  return (
    <Page>
      <Rules />
    </Page>
  )
}

export default RulesPage
