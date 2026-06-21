import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardSplitProps = {
  name: string
  title: string
  leftColor: string
  rightColor: string
  textColor: string
  animationStiffness: number
}

export const cardSplitDefaultProps: CardSplitProps = {
  name: 'David Kim',
  title: 'Brand Strategist',
  leftColor: 'rgba(46, 16, 101, 0.95)',
  rightColor: 'rgba(88, 28, 135, 0.90)',
  textColor: '#d8b4fe',
  animationStiffness: 140,
}

export const CardSplit: React.FC<CardSplitProps> = ({
  name,
  title,
  leftColor,
  rightColor,
  textColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: animationStiffness },
  })
  const splitProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 130 },
  })
  const textProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const x = interpolate(slideProgress, [0, 1], [-700, 0])
  const splitY = interpolate(splitProgress, [0, 1], [0, 45])
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f0a1a 0%, #1a0f2a 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          display: 'flex',
          flexDirection: 'column',
          width: 520,
          overflow: 'visible',
        }}
      >
        <div
          style={{
            transform: `translateY(-${splitY}px)`,
            background: leftColor,
            paddingLeft: 24,
            paddingRight: 52,
            height: 45,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              lineHeight: 1.15,
            }}
          >
            {name}
          </div>
        </div>
        <div
          style={{
            transform: `translateY(${splitY}px)`,
            background: rightColor,
            paddingLeft: 24,
            paddingRight: 52,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: textColor,
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
