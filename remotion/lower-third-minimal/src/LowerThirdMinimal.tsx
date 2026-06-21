import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type LowerThirdMinimalProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdMinimalDefaultProps: LowerThirdMinimalProps = {
  name: 'Sarah Park',
  title: 'Creative Director',
  accentColor: '#e4e4e7',
  titleColor: '#a1a1aa',
  cardBackgroundColor: 'transparent',
  animationStiffness: 80,
}

export const LowerThirdMinimal: React.FC<LowerThirdMinimalProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping: 28, stiffness: animationStiffness },
  })
  const opacity = interpolate(progress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const y = interpolate(progress, [0, 1], [30, 0])
  const lineWidth = interpolate(progress, [0, 1], [0, 320])

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 80,
        paddingLeft: 100,
      }}
    >
      <div
        style={{
          transform: `translateY(${y}px)`,
          opacity,
          background: cardBackgroundColor,
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: '#ffffff',
            fontFamily: 'sans-serif',
            lineHeight: 1,
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 8,
            height: 2,
            width: lineWidth,
            background: accentColor,
          }}
        />
        <div
          style={{
            marginTop: 8,
            fontSize: 18,
            color: titleColor,
            fontFamily: 'sans-serif',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  )
}
