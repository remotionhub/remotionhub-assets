import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

const DEFAULT_PREFIXES = [
  ['K', 'A', 'M', 'X'],
  ['B', 'Z', 'T', 'E'],
  ['Q', 'P', 'V', 'W'],
  ['Y', 'N', 'D', 'I'],
  ['J', 'H', 'S', 'N'],
  ['C', 'L', 'F', 'G'],
]

export interface TitleSlotReelProps {
  text?: string
  reelPrefixes?: string[][]
  charDelay?: number
  itemHeight?: number
  fontSize?: number
  backgroundColor?: string
  highlightColor?: string
  baseColor?: string
  stiffness?: number
  damping?: number
  mass?: number
}

export function TitleSlotReel({
  text = 'REWIND',
  reelPrefixes = DEFAULT_PREFIXES,
  charDelay = 8,
  itemHeight = 110,
  fontSize = 96,
  backgroundColor = '#1a1a2e',
  highlightColor = '#fbbf24',
  baseColor = '#374151',
  stiffness = 70,
  damping = 25,
  mass = 1.2,
}: TitleSlotReelProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const reels = text.split('').map((char, charIdx) => {
    const prefix = reelPrefixes[charIdx] || ['X', 'Y', 'Z', 'W']
    return [...prefix, char]
  })

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: 6 }}>
        {text.split('').map((_, charIdx) => {
          const reel = reels[charIdx]
          const delay = charIdx * charDelay
          const progress = spring({
            frame: frame - delay,
            fps,
            config: { damping, stiffness, mass },
          })
          const translateY = interpolate(
            progress,
            [0, 1],
            [0, -(reel.length - 1) * itemHeight],
          )

          return (
            <div
              key={charIdx}
              style={{ width: 85, height: itemHeight, overflow: 'hidden' }}
            >
              <div style={{ transform: `translateY(${translateY}px)` }}>
                {reel.map((char, j) => (
                  <div
                    key={j}
                    style={{
                      height: itemHeight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize,
                      fontWeight: 900,
                      color: j === reel.length - 1 ? highlightColor : baseColor,
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const titleSlotReelDefaultProps: TitleSlotReelProps = {
  text: 'REWIND',
  reelPrefixes: DEFAULT_PREFIXES,
  charDelay: 8,
  itemHeight: 110,
  fontSize: 96,
  backgroundColor: '#1a1a2e',
  highlightColor: '#fbbf24',
  baseColor: '#374151',
  stiffness: 70,
  damping: 25,
  mass: 1.2,
}
