import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface SubtitleKaraokeProps {
  lyrics?: string
  title?: string
  charHighlightStart?: number[]
  highlightDuration?: number
  fontSize?: number
  unhighlightedRGB?: [number, number, number]
  highlightRGB?: [number, number, number]
  totalFrames?: number
}

export function SubtitleKaraoke({
  lyrics = '月亮代表我的心',
  title = '月亮代表我的心',
  charHighlightStart = [15, 40, 65, 90, 115, 140, 165],
  highlightDuration = 28,
  fontSize = 88,
  unhighlightedRGB = [156, 163, 175],
  highlightRGB = [250, 204, 21],
  totalFrames = 210,
}: SubtitleKaraokeProps) {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()

  // 整体进度（0~1）用于进度条
  const progress = Math.min(
    Math.max(0, (frame - 10) / (totalFrames - 30)),
    1
  )

  const highlightColorStr = `rgb(${highlightRGB[0]}, ${highlightRGB[1]}, ${highlightRGB[2]})`

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #0d0d1a 0%, #1a0a2e 100%)',
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* 背景光晕 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, rgba(${highlightRGB[0]},${highlightRGB[1]},${highlightRGB[2]},0.08) 0%, transparent 65%)`,
        }}
      />

      {/* 标题 */}
      <div
        style={{
          fontSize: 28,
          color: '#9ca3af',
          fontFamily: 'sans-serif',
          letterSpacing: 6,
          marginBottom: 60,
        }}
      >
        {title}
      </div>

      {/* 歌词区 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          marginBottom: 80,
        }}
      >
        {lyrics.split('').map((char, i) => {
          const highlightStart = charHighlightStart[i] ?? 999
          const charProgress = interpolate(
            frame,
            [highlightStart, highlightStart + highlightDuration],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          )
          const isHighlighted = frame >= highlightStart

          const r = Math.round(
            interpolate(charProgress, [0, 1], [unhighlightedRGB[0], highlightRGB[0]])
          )
          const g = Math.round(
            interpolate(charProgress, [0, 1], [unhighlightedRGB[1], highlightRGB[1]])
          )
          const b = Math.round(
            interpolate(charProgress, [0, 1], [unhighlightedRGB[2], highlightRGB[2]])
          )
          const color = isHighlighted ? `rgb(${r},${g},${b})` : '#4b5563'

          const scale = isHighlighted
            ? 1 + interpolate(charProgress, [0, 0.5, 1], [0, 0.12, 0])
            : 1

          return (
            <div
              key={i}
              style={{
                fontSize,
                fontWeight: 700,
                color,
                fontFamily: 'sans-serif',
                transform: `scale(${scale})`,
                textShadow: isHighlighted
                  ? `0 0 24px rgba(${highlightRGB[0]},${highlightRGB[1]},${highlightRGB[2]},0.6)`
                  : 'none',
                transition: 'none',
              }}
            >
              {char}
            </div>
          )
        })}
      </div>

      {/* 进度条容器 */}
      <div
        style={{
          width: 640,
          height: 6,
          background: 'rgba(255,255,255,0.12)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${highlightColorStr}, #f97316)`,
            borderRadius: 3,
          }}
        />
      </div>

      {/* 音符装饰 */}
      <div
        style={{
          position: 'absolute',
          top: 200,
          left: 180,
          fontSize: 40,
          color: `rgba(${highlightRGB[0]},${highlightRGB[1]},${highlightRGB[2]},0.2)`,
        }}
      >
        ♪
      </div>
      <div
        style={{
          position: 'absolute',
          top: 160,
          right: 200,
          fontSize: 52,
          color: `rgba(${highlightRGB[0]},${highlightRGB[1]},${highlightRGB[2]},0.15)`,
        }}
      >
        ♫
      </div>
    </AbsoluteFill>
  )
}

export const subtitleKaraokeDefaultProps: SubtitleKaraokeProps = {
  lyrics: '月亮代表我的心',
  title: '月亮代表我的心',
  charHighlightStart: [15, 40, 65, 90, 115, 140, 165],
  highlightDuration: 28,
  fontSize: 88,
  unhighlightedRGB: [156, 163, 175],
  highlightRGB: [250, 204, 21],
  totalFrames: 210,
}
