import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import React from 'react'

export interface TitleWaveTextProps {
  text?: string
  amplitude?: number
  period?: number
  colors?: string[]
  backgroundColor?: string
  fontSize?: number
}

export function TitleWaveText({
  text = 'MOTION',
  amplitude = 28,
  period = 40,
  colors = ['#f472b6', '#c084fc', '#818cf8', '#38bdf8', '#34d399', '#fbbf24'],
  backgroundColor = '#0f0a1a',
  fontSize = 140,
}: TitleWaveTextProps) {
  const frame = useCurrentFrame()

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', opacity }}>
        {text.split('').map((char, i) => {
          const phase =
            (frame / period) * Math.PI * 2 + (i / text.length) * Math.PI * 2
          const y = Math.sin(phase) * amplitude
          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                transform: `translateY(${y}px)`,
                fontSize,
                fontWeight: 900,
                color: colors[i % colors.length] || '#ffffff',
                fontFamily: 'sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              {char}
            </span>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const titleWaveTextDefaultProps: TitleWaveTextProps = {
  text: 'MOTION',
  amplitude: 28,
  period: 40,
  colors: ['#f472b6', '#c084fc', '#818cf8', '#38bdf8', '#34d399', '#fbbf24'],
  backgroundColor: '#0f0a1a',
  fontSize: 140,
}
