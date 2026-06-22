import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardOutlineProps = {
  name: string
  title: string
  outlineColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const cardOutlineDefaultProps: CardOutlineProps = {
  name: 'Jane Smith',
  title: 'Creative Director',
  outlineColor: '#f59e0b',
  titleColor: '#fcd34d',
  cardBackgroundColor: 'transparent',
  animationStiffness: 140,
}

export const CardOutline: React.FC<CardOutlineProps> = ({
  name,
  title,
  outlineColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: animationStiffness },
  })
  const textProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const x = interpolate(slideProgress, [0, 1], [-700, 0])
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1c1917 0%, #0c0a09 100%)',
        justifyContent: 'flex-end',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          display: 'flex',
          alignItems: 'stretch',
          height: 90,
        }}
      >
        <div style={{ width: 4, background: outlineColor, flexShrink: 0 }} />
        <div
          style={{
            border: `3px solid ${outlineColor}`,
            borderLeft: 'none',
            background: cardBackgroundColor,
            paddingLeft: 24,
            paddingRight: 52,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: textOpacity,
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
          <div
            style={{
              fontSize: 20,
              color: titleColor,
              fontFamily: 'sans-serif',
              marginTop: 2,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
