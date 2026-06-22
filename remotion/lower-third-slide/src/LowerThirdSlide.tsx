import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type LowerThirdSlideProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdSlideDefaultProps: LowerThirdSlideProps = {
  name: 'John Doe',
  title: 'Senior Product Designer',
  accentColor: '#3b82f6',
  titleColor: '#93c5fd',
  cardBackgroundColor: 'rgba(15,23,42,0.90)',
  animationStiffness: 140,
}

export const LowerThirdSlide: React.FC<LowerThirdSlideProps> = ({
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
        background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
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
        <div style={{ width: 6, background: accentColor, flexShrink: 0 }} />
        <div
          style={{
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
