import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardWipeProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  wipeDurationFrames: number
}

export const cardWipeDefaultProps: CardWipeProps = {
  name: 'Sofia Rossi',
  title: 'UX Researcher',
  accentColor: '#a5b4fc',
  titleColor: '#a5b4fc',
  cardBackgroundColor: 'rgba(49, 46, 129, 0.95)',
  wipeDurationFrames: 30,
}

export const CardWipe: React.FC<CardWipeProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  wipeDurationFrames,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  // Linearly interpolate wipeProgress based on wipeDurationFrames
  const wipeProgress = interpolate(frame, [0, wipeDurationFrames], [0, 1], {
    extrapolateRight: 'clamp',
  })
  
  const textProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const clipRight = interpolate(wipeProgress, [0, 1], [100, 0])
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f0a1f 0%, #0a0f2a 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          clipPath: `inset(0 ${clipRight}% 0 0)`,
          display: 'flex',
          alignItems: 'stretch',
          height: 90,
        }}
      >
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
