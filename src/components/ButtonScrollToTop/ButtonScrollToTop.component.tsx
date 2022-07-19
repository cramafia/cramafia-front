import React, { useEffect, useState } from 'react'

import { ScrollContainer, Arrow } from './ButtonScrollToTop.styles'

export const ButtonScrollToTop: React.FC = () => {
  const [isShow, setIsShow] = useState(false)

  const onScroll = (): void => {
    if (window.pageYOffset > 200) {
      setIsShow(true)
    } else setIsShow(false)
  }

  const scrollToTop = (): void => {
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
