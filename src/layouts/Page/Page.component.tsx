import React, { FunctionComponent } from 'react'
import { PageProps } from './Page.types'
import { Header } from '../../components/Header'
import { PageContainer } from './Page.styles'
import { Footer } from '../../components/Footer'
import { Register } from '../../components/Modals/Register'
import { Login } from '../../components/Modals/Login'

export const Page: FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  )
}
