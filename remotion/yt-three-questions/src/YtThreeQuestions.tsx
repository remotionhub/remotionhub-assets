import type React from 'react'
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const colors = {
  background: "#0B0F17",
  text: "#FFFFFF",
  accent: "#4DA3FF",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
  border: "rgba(77, 163, 255, 0.3)",
};

const cards = [
  {
    number: "①",
    title: "首页 + 组件 → 整站",
    text: "设计师只画首页与组件\nAI 帮你生出其他页面和前端代码",
  },
  {
    number: "②",
    title: "完整设计 → 换风格",
    text: "拿到别人的设计稿\nAI 快速改成你想要的风格",
  },
  {
    number: "③",
    title: "参考图 → 复刻画面",
    text: "没有 Figma 原稿\n丢一张参考图，AI 复刻出可操作介面",
  },
];

export const THREE_QUESTIONS_DURATION_FRAMES = 900;

export const YtThreeQuestions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardInterval = 10 * fps;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Noto Sans TC', 'Inter', sans-serif",
      }}
    >
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
          gap: 32,
        }}
      >
        {cards.map((card, index) => {
          const cardStart = index * cardInterval;
          const localFrame = frame - cardStart;

          if (localFrame < 0) return null;

          const opacity = interpolate(localFrame, [0, 20], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });

          const translateY = interpolate(localFrame, [0, 20], [40, 0], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });

          const scale = spring({
            frame: localFrame,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 36,
                width: 1400,
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`,
                borderRadius: 24,
                padding: "36px 48px",
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: colors.accent,
                  flexShrink: 0,
                  width: 64,
                  textAlign: "center",
                }}
              >
                {card.number}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    color: colors.accent,
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: 30,
                    color: colors.text,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.text}
                </div>
              </div>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const ytThreeQuestionsDefaultProps = {}
