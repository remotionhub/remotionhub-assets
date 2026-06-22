import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type LowerThirdBoxPopProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdBoxPopDefaultProps: LowerThirdBoxPopProps = {
  name: 'Alex Chen',
  title: 'Lead Engineer',
  accentColor: '#ffffff',
  titleColor: '#ddd6fe',
  cardBackgroundColor: '#7c3aed',
  animationStiffness: 200,
}

export const LowerThirdBoxPop: React.FC<LowerThirdBoxPopProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const boxProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: animationStiffness, mass: 0.8 },
  })
  const nameProgress = spring({
    frame: frame - 8,
    fps,
    config: { damping: 25, stiffness: 100 },
  })
  const titleProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 25, stiffness: 100 },
  })

  const boxScale = interpolate(boxProgress, [0, 1], [0, 1])
  const nameOpacity = interpolate(nameProgress, [0, 0.5], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const titleOpacity = interpolate(titleProgress, [0, 0.5], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 85,
        paddingLeft: 90,
      }}
    >
      <div
        style={{
          transform: `scale(${boxScale})`,
          transformOrigin: 'left bottom',
        }}
      >
        <div
          style={{
            background: cardBackgroundColor,
            borderLeft: `4px solid ${accentColor}`,
            paddingLeft: 24,
            paddingRight: 36,
            paddingTop: 14,
            paddingBottom: 14,
            display: 'inline-flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              opacity: nameOpacity,
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              lineHeight: 1.15,
            }}
          >
            {name}
          </div>
          <div
            style={{
              opacity: titleOpacity,
              fontSize: 18,
              color: titleColor,
              fontFamily: 'sans-serif',
              marginTop: 3,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
