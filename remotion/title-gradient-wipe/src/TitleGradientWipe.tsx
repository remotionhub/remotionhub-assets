import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface TitleGradientWipeProps {
  text?: string
  backgroundColor?: string
  baseTextColor?: string
  gradient?: string
  fontSize?: number
  stiffness?: number
  damping?: number
}

export function TitleGradientWipe({
  text = 'Your Story Starts Here',
  backgroundColor = '#030712',
  baseTextColor = '#1f2937',
  gradient = 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)',
  fontSize = 96,
  stiffness = 50,
  damping = 30,
}: TitleGradientWipeProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping, stiffness },
  })
  const clipRight = interpolate(progress, [0, 1], [100, 0])

  const textStyle: React.CSSProperties = {
    fontSize,
    fontWeight: 900,
    fontFamily: 'sans-serif',
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap',
  }

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Gray base text */}
        <div style={{ ...textStyle, color: baseTextColor }}>{text}</div>

        {/* Colorful text revealed by wipe */}
        <div
          style={{
            ...textStyle,
            position: 'absolute',
            inset: 0,
            clipPath: `inset(0 ${clipRight}% 0 0)`,
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  )
}

export const titleGradientWipeDefaultProps: TitleGradientWipeProps = {
  text: 'Your Story Starts Here',
  backgroundColor: '#030712',
  baseTextColor: '#1f2937',
  gradient: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)',
  fontSize: 96,
  stiffness: 50,
  damping: 30,
}
