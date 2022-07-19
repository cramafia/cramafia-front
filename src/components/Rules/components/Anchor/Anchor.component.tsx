import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useOnScreen } from 'src/hooks/useOnScreen'
import {
  addVisibleAnchor,
  removeUnvisibleAnchor,
} from 'src/redux/reducers/rules.reducer'

import { getAnchor } from '../../helpers/anchors'

import { AnchorObserver } from './Anchor.styles'
import { Props } from './Anchor.types'

export const Anchor: React.FC<Props> = ({ anchor }) => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const isVisible: boolean = useOnScreen<HTMLDivElement>(ref)

  useEffect(() => {
    if (isVisible) {
      dispatch(addVisibleAnchor(anchor))
    }

    if (!isVisible) {
      dispatch(removeUnvisibleAnchor(anchor))
    }
  }, [isVisible])

  return (
    <>
      <a id={getAnchor(anchor).anchor} />
      <AnchorObserver as="div" ref={ref} />
    </>
  )
}
