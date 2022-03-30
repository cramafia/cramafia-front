import React from 'react'
import { Button } from 'react-bootstrap'

import { ButtonLinkProps } from './ButtonLink.types'
import { useRouter } from 'next/router'

export const ButtonLink = ({ children, href }: ButtonLinkProps) => {
  const router = useRouter()
  const linkTo = () => {
    router.push(href)
  }
  return <div onClick={linkTo}>{children}</div>
}
