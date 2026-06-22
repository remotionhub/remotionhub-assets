import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardGlassProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  blurAmount: number
  animationStiffness: number
}

export const cardGlassDefaultProps: CardGlassProps = {
  name: 'Jane Smith',
  title: 'Creative Director',
  accentColor: '#7c3aed',
  titleColor: 'rgba(255, 255, 255, 0.75)',
  cardBackgroundColor: 'rgba(255, 255, 255, 0.12)',
  blurAmount: 20,
  animationStiffness: 120,
}

export const CardGlass: React.FC<CardGlassProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  blurAmount,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const riseProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: animationStiffness },
  })
  const textProgress = spring({
    frame: frame - 12,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const y = interpolate(riseProgress, [0, 1], [120, 0])
  const textOpacity = interpolate(textProgress, [0, 0.5], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${accentColor} 0%, #2563eb 100%)`,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          transform: `translateY(${y}px)`,
          background: cardBackgroundColor,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: 12,
          paddingLeft: 40,
          paddingRight: 56,
          paddingTop: 16,
          paddingBottom: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 90,
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
            marginTop: 4,
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  )
}
