import { gsap } from 'gsap'
import React, { useEffect } from 'react'

import { StyledLoader, StyledSVG } from './Loader.styles'
import { LoaderProps } from './Loader.types'

import { getColor, Color } from '@/theme/color'

export const SunspotLoader: React.FC<LoaderProps> = ({
  className = 'sunspotloader',
  background = 'transparent',
  gradientColors = [Color.RED_100, Color.PURPLE_200],
  shadowColor = `#5B1E00`,
  shadowOpacity = `0.05`,
  size = 5,
  duration = 2,
  emptySegs = 10,
}) => {
  const select = (s: string): Element => document.querySelector(s)!
  const cloneEl = (el: Element): Node => el.cloneNode(true)
  const svgOrigin = '400 300'
  const deg = 15
  const fullSegs = 360 / deg
  const separateSegs = 2
  const segsBetween = (emptySegs - separateSegs) / 2

  const containerAnim = (): void => {
    const container = select('#container')

    gsap.to(container, {
      rotation: '+=360',
      svgOrigin,
      duration,
      ease: 'linear',
      repeat: -1,
      repeatDelay: 0,
    })
  }

  const addQuarterSegs = (quater: number, sepSegs: Node[]): void => {
    const seg = select('.seg')
    const container = select('#container')

    for (let i = 0; i < separateSegs; i += 1) {
      const separate = cloneEl(seg)

      container.appendChild(separate)

      const last = i === separateSegs - 1 ? -5 : 0
      const first = i === 0 ? 5 : 0

      gsap.set(separate, {
        rotation:
          (360 - emptySegs + segsBetween + i) * deg +
          quater * deg * (segsBetween + separateSegs) +
          last +
          first,
        svgOrigin,
      })

      sepSegs.push(separate)
    }
  }

  const addSeparateSegs = (): Node[] => {
    const sepSegs: Node[] = []

    for (let i = 0; i < 4; i += 1) {
      addQuarterSegs(i, sepSegs)
    }

    return sepSegs
  }

  const addMainSegs = (): Node[] => {
    const container = select('#container')
    const seg = select('.seg')
    const mainSegs = []

    mainSegs.push(seg)

    for (let i = 1; i < fullSegs - emptySegs; i += 1) {
      const clone = cloneEl(seg)

      container.appendChild(clone)

      gsap.set(clone, {
        rotation: i * deg,
        svgOrigin,
      })

      mainSegs.push(clone)
    }

    return mainSegs
  }

  const sepSegsAnim = (segs: Node[]): void => {
    segs.forEach((seg) => {
      gsap.to(seg, {
        rotation: `-=${deg}`,
        svgOrigin,
        repeatRefresh: true,
        ease: 'sine.inOut',
        repeat: -1,
        repeatDelay: 0,
        duration,
      })
    })
  }

  const mainSegsAnim = (segs: Node[]): void => {
    segs.forEach((seg) => {
      gsap.to(seg, {
        svgOrigin,
        rotation: `+=120`,
        repeatRefresh: true,
        repeat: -1,
        duration,
        ease: 'linear',
        repeatDelay: 0,
      })
    })
  }

  useEffect(() => {
    gsap.set('svg', {
      visibility: 'visible',
    })

    const mainSegs = addMainSegs()
    const sepSegs = addSeparateSegs()

    sepSegsAnim(sepSegs)
    mainSegsAnim(mainSegs)
    containerAnim()
  }, [])

  return (
    <StyledLoader className={className} background={background} units={size}>
      <StyledSVG
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="335 235 150 150"
      >
        <defs>
          <g id="container" filter="url(#goo)">
            <path className="seg" d="M412.9,251.7c-4.1-1.1-8.5-1.7-12.9-1.7" />
          </g>
          <filter
            id="goo"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
            <feBlend />
          </filter>
          <radialGradient
            id="grad"
            cx="400.5176"
            cy="298.0287"
            r="125.9247"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.39"
              style={{ stopColor: getColor(gradientColors[0]) }}
            />
            <stop
              offset="0.45"
              style={{ stopColor: getColor(gradientColors[1]) }}
            />
          </radialGradient>
        </defs>
        <g id="wrapper">
          <use
            x="20"
            y="20"
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke={shadowColor}
            opacity={shadowOpacity}
          />
          <use
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="url(#grad)"
          />
        </g>
      </StyledSVG>
    </StyledLoader>
  )
}
