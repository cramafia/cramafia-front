import React from 'react'
import { Container } from 'react-bootstrap'

import { PageContainer, HeaderContainer } from './Page.styles'
import { PageProps } from './Page.types'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

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
