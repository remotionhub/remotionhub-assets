import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type LowerThirdSocialProps = {
  name: string
  title: string
  handle: string
  platform: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdSocialDefaultProps: LowerThirdSocialProps = {
  name: 'John Doe',
  title: 'Developer',
  handle: '@johndoe',
  platform: '𝕏',
  accentColor: '#000000',
  titleColor: '#ffffff',
  cardBackgroundColor: '#1f2937',
  animationStiffness: 120,
}

export const LowerThirdSocial: React.FC<LowerThirdSocialProps> = ({
  name,
  title,
  handle,
  platform,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const nameProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: animationStiffness },
  })
  const p0 = spring({
    frame: frame - 10,
    fps,
    config: { damping: 15, stiffness: 200 },
  })

  const nameOpacity = interpolate(nameProgress, [0, 0.4], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const nameX = interpolate(nameProgress, [0, 1], [-80, 0])

  const pOpacity = interpolate(p0, [0, 0.5], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const pScale = interpolate(p0, [0, 1], [0.5, 1])

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: 80,
        paddingLeft: 90,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            opacity: nameOpacity,
            transform: `translateX(${nameX}px)`,
            fontSize: 38,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'sans-serif',
            background: cardBackgroundColor === '#1f2937' ? 'transparent' : cardBackgroundColor,
          }}
        >
          {name}
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{
              opacity: pOpacity,
              transform: `scale(${pScale})`,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: accentColor,
              borderRadius: 6,
              paddingLeft: 12,
              paddingRight: 14,
              paddingTop: 7,
              paddingBottom: 7,
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'sans-serif',
              }}
            >
              {platform}
            </span>
            <span
              style={{ fontSize: 15, color: titleColor, fontFamily: 'sans-serif' }}
            >
              {handle}
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
