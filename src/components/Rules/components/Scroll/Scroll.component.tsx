import React, { useEffect, useRef } from 'react'
import { ContentContainer, ScrollContainer } from './Scroll.styles'

export const Scroll: React.FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 200
        ? scroll?.current?.classList?.remove('disable')
        : scroll?.current?.classList?.add('disable')
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scroll = useRef(null)

  return (
    <ScrollContainer>
      <ContentContainer className="disable" ref={scroll} onClick={scrollToTop}>
        <svg width="20" height="20" viewBox="0 0 100 100">
          <path
            fill="white"
            d="m50 0c-13.262 0-25.98 5.2695-35.355 14.645s-14.645 22.094-14.645 
            35.355 5.2695 25.98 14.645 35.355 22.094 14.645 35.355 14.645 25.98-5.2695 35.355-14.645
             14.645-22.094 14.645-35.355-5.2695-25.98-14.645-35.355-22.094-14.645-35.355-14.645zm20.832
              62.5-20.832-22.457-20.625 22.457c-1.207
               0.74219-2.7656 0.57812-3.7891-0.39844-1.0273-0.98047-1.2695-2.5273-0.58594-3.7695l22.918-25c0.60156-0.61328
                1.4297-0.96094 2.2891-0.96094 0.86328 0 1.6914 0.34766 2.293 0.96094l22.918 25c0.88672 1.2891 0.6875 3.0352-0.47266
                 4.0898-1.1562 1.0508-2.9141 1.0859-4.1133 0.078125z"
          ></path>
        </svg>
        <span> Наверх</span>
      </ContentContainer>
    </ScrollContainer>
  )
}