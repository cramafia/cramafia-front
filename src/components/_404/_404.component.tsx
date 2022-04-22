import React, { useEffect, useState } from 'react'
import { LogoText } from 'src/styles'
import { ButtonLink } from '@/components/ButtonLink'
import { useRouter } from 'next/router'

import {
  NotFoundContainer,
  ContentContainer,
  TitleText,
  Content,
  AdditionalInformation,
  _404Container,
  _404Text,
  SubText,
  TimeContainer,
  HomePage,
  IconContainer,
  LogoContainer,
} from './_404.styles'
import { getIcon, IconType } from '@/components/Icon'

export const _404: React.FC = () => {
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
    if (time === 0) router.push('/')
  }, [time, router])

  return (
    <NotFoundContainer>
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
          <_404Container>
            <IconContainer>{getIcon(IconType.ASTRONAUT)()}</IconContainer>
            <_404Text>404</_404Text>
          </_404Container>
        </Content>
      </ContentContainer>
    </NotFoundContainer>
  )
}
