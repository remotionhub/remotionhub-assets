import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface TitleKineticBounceProps {
  words?: string[]
  colors?: string[]
  wordDelay?: number
  backgroundColor?: string
  fontSize?: number
  stiffness?: number
  damping?: number
  mass?: number
}

export function TitleKineticBounce({
  words = ['Make', 'Your', 'Videos', 'Alive.'],
  colors = ['#ffffff', '#ffffff', '#ffffff', '#38bdf8'],
  wordDelay = 15,
  backgroundColor = '#0f172a',
  fontSize = 96,
  stiffness = 150,
  damping = 5,
  mass = 0.6,
}: TitleKineticBounceProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {words.map((word, i) => {
          const delay = i * wordDelay
          const progress = spring({
            frame: frame - delay,
            fps,
            config: { damping, stiffness, mass },
          })
          const y = interpolate(progress, [0, 1], [-400, 0])
          const opacity = interpolate(progress, [0, 0.2], [0, 1], {
            extrapolateRight: 'clamp',
          })

          const color = colors[i] || colors[colors.length - 1] || '#ffffff'

          return (
            <div
              key={i}
              style={{
                transform: `translateY(${y}px)`,
                opacity,
                fontSize,
                fontWeight: 900,
                color,
                fontFamily: 'sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              {word}
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const titleKineticBounceDefaultProps: TitleKineticBounceProps = {
  words: ['Make', 'Your', 'Videos', 'Alive.'],
  colors: ['#ffffff', '#ffffff', '#ffffff', '#38bdf8'],
  wordDelay: 15,
  backgroundColor: '#0f172a',
  fontSize: 96,
  stiffness: 150,
  damping: 5,
  mass: 0.6,
}
