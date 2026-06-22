import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import React from 'react'

// Deterministic flicker pattern (pre-calculated, no Math.random())
const FLICKER = [
  1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
  1, 1, 0, 1,
]

export interface TitleNeonGlowProps {
  text?: string
  textColor?: string
  backgroundColor?: string
  glowColor1?: string
  glowColor2?: string
  fontSize?: number
  flickerEndFrame?: number
  glowFullFrame?: number
}

export function TitleNeonGlow({
  text = 'NEON GLOW',
  textColor = '#f5d0fe',
  backgroundColor = '#050008',
  glowColor1 = '#f0abfc',
  glowColor2 = '#d946ef',
  fontSize = 100,
  flickerEndFrame = 45,
  glowFullFrame = 95,
}: TitleNeonGlowProps) {
  const frame = useCurrentFrame()

  const isFlickering = frame < flickerEndFrame
  const flickerOpacity = isFlickering
    ? FLICKER[frame % FLICKER.length] === 1
      ? 1
      : 0.05
    : 1

  const glowProgress = interpolate(
    frame,
    [flickerEndFrame, glowFullFrame],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  )

  const textShadow = [
    `0 0 ${7 * glowProgress}px #fff`,
    `0 0 ${10 * glowProgress}px #fff`,
    `0 0 ${21 * glowProgress}px #fff`,
    `0 0 ${42 * glowProgress}px ${glowColor1}`,
    `0 0 ${82 * glowProgress}px ${glowColor1}`,
    `0 0 ${102 * glowProgress}px ${glowColor2}`,
  ].join(', ')

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 400,
          color: textColor,
          fontFamily: "'Courier New', Courier, monospace",
          letterSpacing: '0.15em',
          opacity: flickerOpacity,
          textShadow,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  )
}

export const titleNeonGlowDefaultProps: TitleNeonGlowProps = {
  text: 'NEON GLOW',
  textColor: '#f5d0fe',
  backgroundColor: '#050008',
  glowColor1: '#f0abfc',
  glowColor2: '#d946ef',
  fontSize: 100,
  flickerEndFrame: 45,
  glowFullFrame: 95,
}
