import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from 'src/redux/store'
import { LogoText } from 'src/styles'

import { HeaderContainer, Logo, StyledNavbar } from './Header.styles'
import { MenuContent } from './components/MenuContent'
import { NavContent } from './components/NavContent'

import { ButtonLink } from '@/components/ButtonLink'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Theme } from '@/theme/color'

export const Header: React.FC = () => {
  const theme: Theme = useSelector((state: StateType) => state.global.theme)
  const [isExpanded, toggleExpanded] = useState(false)

  return (
    <HeaderContainer>
      <Logo>
        <ButtonLink href="/">
          <LogoText>CRAMAFIA</LogoText>
        </ButtonLink>
        <ThemeSwitcher />
      </Logo>
      <StyledNavbar
        expand={false}
        onToggle={toggleExpanded}
        expanded={isExpanded}
      >
        <MenuContent theme={theme} toggleExpanded={toggleExpanded} />
      </StyledNavbar>
      <StyledNavbar expand>
        <NavContent toggleExpanded={toggleExpanded} />
      </StyledNavbar>
    </HeaderContainer>
  )
}
