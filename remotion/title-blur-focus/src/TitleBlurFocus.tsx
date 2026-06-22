import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface TitleBlurFocusProps {
  text?: string
  textColor?: string
  backgroundColor?: string
  fontSize?: number
  initialBlur?: number
  stiffness?: number
  damping?: number
}

export function TitleBlurFocus({
  text = 'IN FOCUS',
  textColor = '#ffffff',
  backgroundColor = '#000000',
  fontSize = 108,
  initialBlur = 40,
  stiffness = 35,
  damping = 40,
}: TitleBlurFocusProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping, stiffness },
  })
  const blur = interpolate(progress, [0, 1], [initialBlur, 0])
  const opacity = interpolate(progress, [0, 0.15], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const scale = interpolate(progress, [0, 1], [1.25, 1])

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
          fontWeight: 900,
          color: textColor,
          fontFamily: 'sans-serif',
          letterSpacing: '0.08em',
          filter: `blur(${blur}px)`,
          opacity,
          transform: `scale(${scale})`,
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  )
}

export const titleBlurFocusDefaultProps: TitleBlurFocusProps = {
  text: 'IN FOCUS',
  textColor: '#ffffff',
  backgroundColor: '#000000',
  fontSize: 108,
  initialBlur: 40,
  stiffness: 35,
  damping: 40,
}
