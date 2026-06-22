import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface WordItem {
  text: string
  color: string
}

export interface TitleWordFadeProps {
  words?: WordItem[]
  wordDelay?: number
  backgroundColor?: string
  fontSize?: number
  stiffness?: number
  damping?: number
}

export function TitleWordFade({
  words = [
    { text: 'Think', color: '#0f172a' },
    { text: 'Different.', color: '#3b82f6' },
  ],
  wordDelay = 20,
  backgroundColor = '#f8fafc',
  fontSize = 110,
  stiffness = 60,
  damping = 28,
}: TitleWordFadeProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {words.map((word, i) => {
        const progress = spring({
          frame: frame - i * wordDelay,
          fps,
          config: { damping, stiffness },
        })
        const opacity = interpolate(progress, [0, 0.3], [0, 1], {
          extrapolateRight: 'clamp',
        })
        const y = interpolate(progress, [0, 1], [40, 0])

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateY(${y}px)`,
              fontSize,
              fontWeight: 800,
              color: word.color,
              fontFamily: 'sans-serif',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            {word.text}
          </div>
        )
      })}
    </AbsoluteFill>
  )
}

export const titleWordFadeDefaultProps: TitleWordFadeProps = {
  words: [
    { text: 'Think', color: '#0f172a' },
    { text: 'Different.', color: '#3b82f6' },
  ],
  wordDelay: 20,
  backgroundColor: '#f8fafc',
  fontSize: 110,
  stiffness: 60,
  damping: 28,
}
