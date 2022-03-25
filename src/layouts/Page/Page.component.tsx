import React from 'react'
import { PageProps } from './Page.types'
import { Header } from '../../components/Header'
import { PageContainer } from './Page.styles'
import { Footer } from '../../components/Footer'

export const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  )
}
