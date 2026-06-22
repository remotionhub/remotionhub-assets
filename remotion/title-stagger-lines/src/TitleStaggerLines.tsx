import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface StaggerLineItem {
  text: string
  delay: number
  from: 'left' | 'right' | 'bottom'
  color: string
  size: number
}

export interface TitleStaggerLinesProps {
  lines?: StaggerLineItem[]
  backgroundColor?: string
  paddingLeft?: number
  stiffness?: number
  damping?: number
}

export function TitleStaggerLines({
  lines = [
    { text: 'Design', delay: 0, from: 'left', color: '#ffffff', size: 120 },
    { text: 'with Purpose.', delay: 20, from: 'right', color: '#94a3b8', size: 72 },
    { text: 'Move the World.', delay: 40, from: 'bottom', color: '#38bdf8', size: 58 },
  ],
  backgroundColor = '#0f172a',
  paddingLeft = 120,
  stiffness = 100,
  damping = 18,
}: TitleStaggerLinesProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingLeft,
      }}
    >
      {lines.map((line, i) => {
        const progress = spring({
          frame: frame - line.delay,
          fps,
          config: { damping, stiffness },
        })
        const opacity = interpolate(progress, [0, 0.3], [0, 1], {
          extrapolateRight: 'clamp',
        })

        let transform = ''
        if (line.from === 'left') {
          const x = interpolate(progress, [0, 1], [-300, 0])
          transform = `translateX(${x}px)`
        } else if (line.from === 'right') {
          const x = interpolate(progress, [0, 1], [300, 0])
          transform = `translateX(${x}px)`
        } else {
          const y = interpolate(progress, [0, 1], [80, 0])
          transform = `translateY(${y}px)`
        }

        return (
          <div
            key={i}
            style={{
              transform,
              opacity,
              fontSize: line.size,
              fontWeight: 900,
              color: line.color,
              fontFamily: 'sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {line.text}
          </div>
        )
      })}
    </AbsoluteFill>
  )
}

export const titleStaggerLinesDefaultProps: TitleStaggerLinesProps = {
  lines: [
    { text: 'Design', delay: 0, from: 'left', color: '#ffffff', size: 120 },
    { text: 'with Purpose.', delay: 20, from: 'right', color: '#94a3b8', size: 72 },
    { text: 'Move the World.', delay: 40, from: 'bottom', color: '#38bdf8', size: 58 },
  ],
  backgroundColor: '#0f172a',
  paddingLeft: 120,
  stiffness: 100,
  damping: 18,
}
