import { AbsoluteFill, useCurrentFrame } from 'remotion'
import React from 'react'

export interface TitleTypewriterProps {
  text?: string
  charsPerFrame?: number
  fontSize?: number
  textColor?: string
  backgroundColor?: string
  cursorColor?: string
  cursorBlinkInterval?: number
}

export function TitleTypewriter({
  text = 'Hello, Remotion.',
  charsPerFrame = 2,
  fontSize = 72,
  textColor = '#ffffff',
  backgroundColor = '#0f172a',
  cursorColor = '#38bdf8',
  cursorBlinkInterval = 15,
}: TitleTypewriterProps) {
  const frame = useCurrentFrame()

  const charsToShow = Math.min(
    Math.floor(frame * charsPerFrame),
    text.length,
  )
  const displayText = text.slice(0, charsToShow)

  const isDoneTyping = charsToShow >= text.length
  const cursorOpacity = isDoneTyping
    ? Math.floor(frame / cursorBlinkInterval) % 2 === 0
      ? 1
      : 0
    : 1

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize,
          fontWeight: 700,
          color: textColor,
          letterSpacing: '0.02em',
        }}
      >
        <span>{displayText}</span>
        <span
          style={{
            display: 'inline-block',
            width: 4,
            height: fontSize * 1.1,
            background: cursorColor,
            marginLeft: 6,
            opacity: cursorOpacity,
            borderRadius: 2,
          }}
        />
      </div>
    </AbsoluteFill>
  )
}

export const titleTypewriterDefaultProps: TitleTypewriterProps = {
  text: 'Hello, Remotion.',
  charsPerFrame: 2,
  fontSize: 72,
  textColor: '#ffffff',
  backgroundColor: '#0f172a',
  cursorColor: '#38bdf8',
  cursorBlinkInterval: 15,
}
