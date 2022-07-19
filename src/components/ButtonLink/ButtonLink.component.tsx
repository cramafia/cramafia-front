import { useRouter } from 'next/router'
import React from 'react'

import { ButtonLinkProps } from './ButtonLink.types'

export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href }) => {
  const router = useRouter()
  const linkTo = (): void => {
    router
      .push(href)
      .then(() => {})
      .catch(() => {})
  }

  return <div onClick={linkTo}>{children}</div>
}
