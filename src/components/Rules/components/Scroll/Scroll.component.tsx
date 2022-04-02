import React, { useEffect, useRef, useState } from 'react'
import { ScrollContainer } from './Scroll.styles'
import ToTopButton from '@/assets/icons/toTopButton.svg'

export const Scroll: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 200 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <ScrollContainer active={isActive} onClick={scrollToTop}>
      <ToTopButton />
      <span>Наверх</span>
    </ScrollContainer>
  )
}
