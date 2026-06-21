import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type LowerThirdGradientBarProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdGradientBarDefaultProps: LowerThirdGradientBarProps = {
  name: 'Maria Torres',
  title: 'Head of Innovation',
  accentColor: '#06b6d4',
  titleColor: '#a5f3fc',
  cardBackgroundColor: 'rgba(6, 182, 212, 0.18)',
  animationStiffness: 80,
}

export const LowerThirdGradientBar: React.FC<LowerThirdGradientBarProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: animationStiffness },
  })
  const opacity = interpolate(progress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const y = interpolate(progress, [0, 1], [60, 0])

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, #082f49 100%)',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          transform: `translateY(${y}px)`,
          opacity,
          width: '100%',
          paddingBottom: 60,
        }}
      >
        <div
          style={{
            background: `linear-gradient(90deg, ${cardBackgroundColor} 0%, rgba(139, 92, 246, 0.18) 100%)`,
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.18)',
            paddingLeft: 100,
            paddingRight: 100,
            paddingTop: 20,
            paddingBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 4,
              height: 58,
              background: `linear-gradient(180deg, ${accentColor}, #8b5cf6)`,
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontSize: 38,
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'sans-serif',
                lineHeight: 1.1,
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 18,
                color: titleColor,
                fontFamily: 'sans-serif',
                marginTop: 3,
                letterSpacing: '0.04em',
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
