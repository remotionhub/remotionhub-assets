import { AbsoluteFill, useCurrentFrame } from 'remotion'
import React from 'react'

export interface TitleScrambleProps {
  text?: string
  chars?: string
  stagger?: number
  scrambleFrames?: number
  backgroundColor?: string
  decodedColor?: string
  scrambledColor?: string
  fontSize?: number
}

export function TitleScramble({
  text = 'DECODED',
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&',
  stagger = 6,
  scrambleFrames = 8,
  backgroundColor = '#050a05',
  decodedColor = '#00ff41',
  scrambledColor = '#007a20',
  fontSize = 110,
}: TitleScrambleProps) {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontFamily: "'Courier New', Courier, monospace",
          fontSize,
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        {text.split('').map((correctChar, i) => {
          const resolveAt = i * stagger + scrambleFrames
          const isResolved = frame >= resolveAt
          const displayChar = isResolved
            ? correctChar
            : chars[(frame * 7 + i * 13 + 3) % chars.length]

          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: '0.72em',
                textAlign: 'center',
                color: isResolved ? decodedColor : scrambledColor,
              }}
            >
              {displayChar}
            </span>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const titleScrambleDefaultProps: TitleScrambleProps = {
  text: 'DECODED',
  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&',
  stagger: 6,
  scrambleFrames: 8,
  backgroundColor: '#050a05',
  decodedColor: '#00ff41',
  scrambledColor: '#007a20',
  fontSize: 110,
}
