import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface TitleZoomPunchProps {
  text?: string
  backgroundColor?: string
  textColor?: string
  fontSize?: number
  stiffness?: number
  damping?: number
  mass?: number
}

export function TitleZoomPunch({
  text = 'IMPACT',
  backgroundColor = '#dc2626',
  textColor = '#ffffff',
  fontSize = 130,
  stiffness = 250,
  damping = 10,
  mass = 0.7,
}: TitleZoomPunchProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping, stiffness, mass },
  })
  const scale = interpolate(progress, [0, 1], [6, 1])
  const opacity = interpolate(frame, [0, 5], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          fontSize,
          fontWeight: 900,
          color: textColor,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.03em',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  )
}

export const titleZoomPunchDefaultProps: TitleZoomPunchProps = {
  text: 'IMPACT',
  backgroundColor: '#dc2626',
  textColor: '#ffffff',
  fontSize: 130,
  stiffness: 250,
  damping: 10,
  mass: 0.7,
}
