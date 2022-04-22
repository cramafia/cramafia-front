import React from 'react'
import { Container } from 'react-bootstrap'

import { PageProps } from './Page.types'
import { Header } from '@/components/Header'
import { PageContainer, HeaderContainer } from './Page.styles'
import { Footer } from '@/components/Footer'

export const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <PageContainer>
      <HeaderContainer fluid>
        <Header />
      </HeaderContainer>
      <Container>
        {children}
        <Footer />
      </Container>
    </PageContainer>
  )
}
