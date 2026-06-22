import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

export type CardTypewriterProps = {
  name: string
  title: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  charactersPerSecond: number
}

export const cardTypewriterDefaultProps: CardTypewriterProps = {
  name: 'Jane Smith',
  title: 'Creative Director',
  accentColor: '#ffffff',
  titleColor: '#a5f3fc',
  cardBackgroundColor: '#0e7490',
  charactersPerSecond: 15, // At 30fps, 1 char every 2 frames
}

export const CardTypewriter: React.FC<CardTypewriterProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  charactersPerSecond,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 140 },
  })
  const x = interpolate(slideProgress, [0, 1], [-700, 0])

  const typeStart = 12
  const charsPerFrame = charactersPerSecond / fps
  const nameChars = Math.floor(Math.max(0, frame - typeStart) * charsPerFrame)
  const displayedName = name.slice(0, nameChars)

  const nameTypeDuration = Math.ceil(name.length / charsPerFrame)
  const titleStart = typeStart + nameTypeDuration + 20
  const titleChars = Math.floor(Math.max(0, frame - titleStart) * charsPerFrame)
  const displayedTitle = title.slice(0, titleChars)

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #164e63 0%, #0c1a20 100%)',
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
        <div style={{ width: 6, background: accentColor, flexShrink: 0 }} />
        <div
          style={{
            background: cardBackgroundColor,
            paddingLeft: 24,
            paddingRight: 52,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'monospace',
              lineHeight: 1.15,
              minWidth: 360,
            }}
          >
            {displayedName}
            {nameChars < name.length && (
              <span
                style={{ borderRight: `3px solid ${accentColor}`, marginLeft: 2 }}
              >
                &nbsp;
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 20,
              color: titleColor,
              fontFamily: 'monospace',
              marginTop: 2,
              minHeight: 24,
            }}
          >
            {displayedTitle}
            {displayedName === name && titleChars < title.length && (
              <span
                style={{ borderRight: `3px solid ${titleColor}`, marginLeft: 2 }}
              >
                &nbsp;
              </span>
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
