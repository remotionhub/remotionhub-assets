import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface Title3dRotateProps {
  text?: string
  textColor?: string
  backgroundColor?: string
  fontSize?: number
  perspective?: string
  stiffness?: number
  damping?: number
}

export function Title3dRotate({
  text = '3D ROTATE',
  textColor = '#fafafa',
  backgroundColor = '#18181b',
  fontSize = 110,
  perspective = '1200px',
  stiffness = 80,
  damping = 15,
}: Title3dRotateProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping, stiffness },
  })
  const rotateY = interpolate(progress, [0, 1], [-90, 0])
  const opacity = interpolate(progress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        perspective,
      }}
    >
      <div
        style={{
          transform: `rotateY(${rotateY}deg)`,
          opacity,
          fontSize,
          fontWeight: 900,
          color: textColor,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  )
}

export const title3dRotateDefaultProps: Title3dRotateProps = {
  text: '3D ROTATE',
  textColor: '#fafafa',
  backgroundColor: '#18181b',
  fontSize: 110,
  perspective: '1200px',
  stiffness: 80,
  damping: 15,
}
