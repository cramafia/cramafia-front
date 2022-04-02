import React, { useEffect, useState } from 'react'
import { ScrollContainer } from './ButtonScrollToTop.styles'
import ToTopButton from '@/assets/icons/toTopButton.svg'

export const ButtonScrollToTop: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  const onScroll = () => {
    window.pageYOffset > 200 ? setIsActive(true) : setIsActive(false)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <ScrollContainer active={isActive} onClick={scrollToTop}>
      <ToTopButton />
      <span>Наверх</span>
    </ScrollContainer>
  )
}
