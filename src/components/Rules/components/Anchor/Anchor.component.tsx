import React, { useEffect, useRef } from 'react'
import { useOnScreen } from 'src/hooks/useOnScreen'
import { useDispatch } from 'react-redux'
import { getAnchor, AnchorType } from '../../anchors'
import { AnchorObserver } from './Anchor.styles'
import {
  addVisibleAnchor,
  removeUnvisibleAnchor,
} from 'src/redux/reducers/rules.reducer'
import _ from 'lodash'

export const Anchor = ({ anchor }: { anchor: AnchorType }) => {
  const dispatch = useDispatch()
  const ref: any = useRef<HTMLDivElement>()
  const isVisible: boolean = useOnScreen(ref)
  useEffect(() => {
    if (isVisible && !!anchor) {
      dispatch(addVisibleAnchor(anchor))
    }
    if (!isVisible && !!anchor) {
      dispatch(removeUnvisibleAnchor(anchor))
    }
  }, [isVisible])
  return (
    <>
      <a name={getAnchor(anchor).anchor} />
      <AnchorObserver as="div" ref={ref} />
    </>
  )
}
