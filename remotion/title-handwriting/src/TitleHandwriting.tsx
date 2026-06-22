import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import React from 'react'

export interface TitleHandwritingProps {
  text?: string
  textColor?: string
  backgroundColor?: string
  underlineColor?: string
  fontSize?: number
  dashLength?: number
  startFrame?: number
  endFrame?: number
}

export function TitleHandwriting({
  text = 'Create',
  textColor = '#1c1917',
  backgroundColor = '#fafaf9',
  underlineColor = '#ef4444',
  fontSize = 145,
  dashLength = 2000,
  startFrame = 10,
  endFrame = 140,
}: TitleHandwritingProps) {
  const frame = useCurrentFrame()

  const drawProgress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const dashOffset = interpolate(drawProgress, [0, 1], [dashLength, 0])

  const fillOpacity = interpolate(frame, [endFrame - 10, endFrame + 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const underlineWidth = interpolate(frame, [startFrame, endFrame], [0, 500], {
    extrapolateLeft: 'clamp',
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
      <svg
        viewBox="0 0 900 220"
        width="1350"
        height="330"
        style={{ overflow: 'visible' }}
      >
        {/* Filled text - fades in after drawing */}
        <text
          x="450"
          y="155"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize={fontSize}
          fontWeight="bold"
          fill={textColor}
          fillOpacity={fillOpacity}
        >
          {text}
        </text>

        {/* Stroke-animated text - simulates drawing */}
        <text
          x="450"
          y="155"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize={fontSize}
          fontWeight="bold"
          fill="none"
          stroke={textColor}
          strokeWidth="2.5"
          strokeDasharray={dashLength}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {text}
        </text>

        {/* Decorative red underline */}
        <line
          x1="200"
          y1="175"
          x2={200 + underlineWidth}
          y2="175"
          stroke={underlineColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </AbsoluteFill>
  )
}

export const titleHandwritingDefaultProps: TitleHandwritingProps = {
  text: 'Create',
  textColor: '#1c1917',
  backgroundColor: '#fafaf9',
  underlineColor: '#ef4444',
  fontSize: 145,
  dashLength: 2000,
  startFrame: 10,
  endFrame: 140,
}
