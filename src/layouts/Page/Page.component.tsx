import React from 'react'
import { PageProps } from './Page.types'
import { Header } from '../../components/Header'
import { PageContainer } from './Page.styles'
import { Footer } from '../../components/Footer'
import { Container } from 'react-bootstrap'

export const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <PageContainer>
      <Container fluid>
        <Header />
      </Container>
      <Container>
        {children}
        <Footer />
      </Container>
    </PageContainer>
  )
}
