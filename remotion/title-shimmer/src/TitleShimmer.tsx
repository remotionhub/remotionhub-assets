import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import React from 'react'

export interface TitleShimmerProps {
  text?: string
  baseTextColor?: string
  shimmerColor?: string
  backgroundColor?: string
  fontSize?: number
  startFrame?: number
  endFrame?: number
}

export function TitleShimmer({
  text = 'GOLDEN HOUR',
  baseTextColor = '#8b6914',
  shimmerColor = '#fff8dc',
  backgroundColor = '#0c0c0c',
  fontSize = 100,
  startFrame = 5,
  endFrame = 85,
}: TitleShimmerProps) {
  const frame = useCurrentFrame()

  const shimmerCenter = interpolate(frame, [startFrame, endFrame], [-25, 125], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  })

  const maskGradient = `linear-gradient(
    105deg,
    transparent ${shimmerCenter - 20}%,
    rgba(0,0,0,0.4) ${shimmerCenter - 8}%,
    black ${shimmerCenter}%,
    rgba(0,0,0,0.4) ${shimmerCenter + 8}%,
    transparent ${shimmerCenter + 20}%
  )`

  const textStyle: React.CSSProperties = {
    fontSize,
    fontWeight: 900,
    fontFamily: 'sans-serif',
    letterSpacing: '0.12em',
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
      <div style={{ position: 'relative', opacity }}>
        {/* Base: dark gold */}
        <div style={{ ...textStyle, color: baseTextColor }}>{text}</div>
        {/* Shimmer: bright gold, revealed by moving mask */}
        <div
          style={{
            ...textStyle,
            position: 'absolute',
            inset: 0,
            color: shimmerColor,
            WebkitMaskImage: maskGradient,
            maskImage: maskGradient,
          }}
        >
          {text}
        </div>
      </div>
    </AbsoluteFill>
  )
}

export const titleShimmerDefaultProps: TitleShimmerProps = {
  text: 'GOLDEN HOUR',
  baseTextColor: '#8b6914',
  shimmerColor: '#fff8dc',
  backgroundColor: '#0c0c0c',
  fontSize: 100,
  startFrame: 5,
  endFrame: 85,
}
