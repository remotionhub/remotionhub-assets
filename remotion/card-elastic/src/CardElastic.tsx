import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardElasticProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const cardElasticDefaultProps: CardElasticProps = {
  name: 'Emma Torres',
  title: 'Art Director',
  accentColor: '#fda4af',
  titleColor: '#fecdd3',
  cardBackgroundColor: '#e11d48',
  animationStiffness: 180,
}

export const CardElastic: React.FC<CardElasticProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: animationStiffness, mass: 0.6 },
  })
  const textProgress = spring({
    frame: frame - 12,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const x = interpolate(slideProgress, [0, 1], [-700, 0])
  const textScale = interpolate(textProgress, [0, 1], [0.8, 1], {
    extrapolateRight: 'clamp',
  })
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a0a14 0%, #0f0a1a 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
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
        <div style={{ width: 4, background: accentColor, flexShrink: 0 }} />
        <div
          style={{
            background: cardBackgroundColor,
            paddingLeft: 24,
            paddingRight: 52,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transform: `scale(${textScale})`,
            transformOrigin: 'left center',
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
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
