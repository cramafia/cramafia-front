import React, { FunctionComponent } from 'react'
import { PageProps } from './Page.types'
import { Header } from '../../components/Header'
import { PageContainer } from './Page.styles'

export const Page: FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  )
}
