import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardTwoToneProps = {
  name: string
  title: string
  primaryColor: string
  secondaryColor: string
  textColor: string
  titleColor: string
  animationStiffness: number
}

export const cardTwoToneDefaultProps: CardTwoToneProps = {
  name: 'Jane Smith',
  title: 'Creative Director',
  primaryColor: '#f97316',
  secondaryColor: '#1e1b4b',
  textColor: '#ffffff',
  titleColor: '#fb923c',
  animationStiffness: 140,
}

export const CardTwoTone: React.FC<CardTwoToneProps> = ({
  name,
  title,
  primaryColor,
  secondaryColor,
  textColor,
  titleColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: animationStiffness },
  })
  const textProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const x = interpolate(slideProgress, [0, 1], [-700, 0])
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${secondaryColor} 0%, #0f0e1a 100%)`,
        justifyContent: 'flex-end',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          display: 'flex',
          alignItems: 'stretch',
          height: 90,
        }}
      >
        {/* 左侧强调色块 */}
        <div
          style={{
            width: 80,
            background: primaryColor,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div
            style={{
              width: 32,
              height: 3,
              background: 'rgba(255,255,255,0.9)',
            }}
          />
          <div
            style={{
              width: 24,
              height: 3,
              background: 'rgba(255,255,255,0.6)',
            }}
          />
          <div
            style={{
              width: 32,
              height: 3,
              background: 'rgba(255,255,255,0.9)',
            }}
          />
        </div>
        {/* 右侧深色主内容 */}
        <div
          style={{
            background: secondaryColor,
            paddingLeft: 24,
            paddingRight: 52,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: textColor,
              fontFamily: 'sans-serif',
              lineHeight: 1.15,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 20,
              color: titleColor,
              fontFamily: 'sans-serif',
              marginTop: 2,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
