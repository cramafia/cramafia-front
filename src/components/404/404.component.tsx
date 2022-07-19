import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { LogoText } from 'src/styles'

import {
  Wrapper,
  ContentContainer,
  TitleText,
  Content,
  AdditionalInformation,
  NotFoundContainer,
  NotFoundText,
  SubText,
  TimeContainer,
  HomePage,
  IconContainer,
  LogoContainer,
} from './404.styles'

import { ButtonLink } from '@/components/ButtonLink'
import { getIcon, IconType } from '@/components/Icon'

export const NotFoundComponent: React.FC = () => {
  const [time, setTime] = useState(9)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (time === 0)
      router
        .push('/')
        .then(() => {})
        .catch(() => {})
  }, [time, router])

  return (
    <Wrapper>
      <LogoContainer>
        <LogoText>
          <ButtonLink href="/">CRAMAFIA</ButtonLink>
        </LogoText>
      </LogoContainer>

      <ContentContainer>
        <Content>
          <AdditionalInformation>
            <TitleText>
              Oops! You ran out of oxygen
              <br />
            </TitleText>
            <SubText>
              The page you&apos;re looking for is now beyound out reach.
              <br />
              Let&apos;s get you
            </SubText>
            <TimeContainer>Back Home in 00:00:0{time}</TimeContainer>
            <ButtonLink href="/">
              <HomePage>HOME PAGE</HomePage>
            </ButtonLink>
          </AdditionalInformation>
          <NotFoundContainer>
            <IconContainer>{getIcon(IconType.ASTRONAUT)()}</IconContainer>
            <NotFoundText>404</NotFoundText>
          </NotFoundContainer>
        </Content>
      </ContentContainer>
    </Wrapper>
  )
}
