import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import React from 'react'

const TICKER =
  '今日头条：全球科技大会盛大开幕 · 人工智慧新突破获得广泛关注 · 创新奖项颁奖典礼圆满落幕 · 科技新创获得亿元融资 · 更多精彩新闻敬请关注'
const TICKER_SPEED = 2.5

export type LowerThirdNewsProps = {
  name: string
  title: string
  segmentLabel: string
  accentColor: string
  titleColor: string
  cardBackgroundColor: string
  animationStiffness: number
}

export const lowerThirdNewsDefaultProps: LowerThirdNewsProps = {
  name: '张伟明',
  title: '现场记者',
  segmentLabel: 'LIVE',
  accentColor: '#ef4444',
  titleColor: '#bfdbfe',
  cardBackgroundColor: '#1d4ed8',
  animationStiffness: 100,
}

export const LowerThirdNews: React.FC<LowerThirdNewsProps> = ({
  name,
  title,
  segmentLabel,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const bannerProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: animationStiffness },
  })

  const bannerY = interpolate(bannerProgress, [0, 1], [50, 0])
  const tickerX = -frame * TICKER_SPEED

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          opacity: bannerProgress,
          transform: `translateY(${bannerY}px)`,
          width: '100%',
        }}
      >
        <div
          style={{
            background: cardBackgroundColor,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              background: accentColor,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 3,
              paddingBottom: 3,
              fontSize: 15,
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}
          >
            {segmentLabel}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
            }}
          >
            {name}
          </div>
          <div
            style={{
              width: 2,
              height: 28,
              background: 'rgba(255,255,255,0.3)',
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: titleColor,
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            background: '#172554',
            height: 38,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              transform: `translateX(${tickerX}px)`,
              whiteSpace: 'nowrap',
              fontSize: 16,
              color: '#e2e8f0',
              fontFamily: 'sans-serif',
              paddingLeft: 1920,
            }}
          >
            {TICKER} · {TICKER}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
