import React, { useEffect, useState } from 'react'
import { ScrollContainer, Arrow } from './ButtonScrollToTop.styles'
import ToTopButton from '@/assets/icons/toTopButton.svg'
import ArrowToTop from '@/assets/icons/arrowToTop.svg'

export const ButtonScrollToTop: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  const onScroll = () => {
    window.pageYOffset > 200 ? setIsShow(true) : setIsShow(false)
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

  return isShow ? (
    <ScrollContainer onClick={scrollToTop}>
      <Arrow width={10} />
      <span>Наверх</span>
    </ScrollContainer>
  ) : (
    <></>
  )
}
