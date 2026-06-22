import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface TitleSplitRevealProps {
  topText?: string
  bottomText?: string
  fontSize?: number
  topTextColor?: string
  bottomTextColor?: string
  dividerColor?: string
  backgroundColor?: string
  lineWidthMax?: number
  stiffnessLine?: number
  dampingLine?: number
  stiffnessReveal?: number
  dampingReveal?: number
}

export function TitleSplitReveal({
  topText = 'SPLIT',
  bottomText = 'REVEAL',
  fontSize = 140,
  topTextColor = '#ffffff',
  bottomTextColor = '#f59e0b',
  dividerColor = '#f59e0b',
  backgroundColor = '#111827',
  lineWidthMax = 700,
  stiffnessLine = 200,
  dampingLine = 30,
  stiffnessReveal = 100,
  dampingReveal = 20,
}: TitleSplitRevealProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const lineProgress = spring({
    frame,
    fps,
    config: { damping: dampingLine, stiffness: stiffnessLine },
  })
  const revealProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: dampingReveal, stiffness: stiffnessReveal },
  })

  const lineWidth = interpolate(lineProgress, [0, 1], [0, lineWidthMax])
  const topY = interpolate(revealProgress, [0, 1], [0, -fontSize * 0.55])
  const bottomY = interpolate(revealProgress, [0, 1], [0, fontSize * 0.55])

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Center divider line */}
      <div
        style={{
          position: 'absolute',
          height: 4,
          width: lineWidth,
          background: dividerColor,
          borderRadius: 2,
        }}
      />

      {/* Top half */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '50%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            transform: `translateY(${topY}px)`,
            fontSize,
            fontWeight: 900,
            color: topTextColor,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {topText}
        </div>
      </div>

      {/* Bottom half */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            transform: `translateY(${bottomY}px)`,
            fontSize,
            fontWeight: 900,
            color: bottomTextColor,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {bottomText}
        </div>
      </div>
    </AbsoluteFill>
  )
}

export const titleSplitRevealDefaultProps: TitleSplitRevealProps = {
  topText: 'SPLIT',
  bottomText: 'REVEAL',
  fontSize: 140,
  topTextColor: '#ffffff',
  bottomTextColor: '#f59e0b',
  dividerColor: '#f59e0b',
  backgroundColor: '#111827',
  lineWidthMax: 700,
  stiffnessLine: 200,
  dampingLine: 30,
  stiffnessReveal: 100,
  dampingReveal: 20,
}
