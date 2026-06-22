import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

const SUBTITLES = [
  {
    zh: "欢迎来到这个美丽的世界",
    en: "Welcome to this beautiful world",
    start: 10,
    end: 65,
  },
  {
    zh: "学习永远不嫌太晚",
    en: "It's never too late to learn",
    start: 75,
    end: 130,
  },
  {
    zh: "每一天都是新的开始",
    en: "Every day is a new beginning",
    start: 140,
    end: 195,
  },
  {
    zh: "相信自己，勇敢前行",
    en: "Believe in yourself and move forward",
    start: 205,
    end: 260,
  },
];

export const SubtitleDualLang: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
        width,
        height,
      }}
    >
      {/* 背景装饰 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(56,189,248,0.06) 0%, transparent 60%)",
        }}
      />

      {SUBTITLES.map((sub, i) => {
        const fadeIn = interpolate(frame, [sub.start, sub.start + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const fadeOut = interpolate(frame, [sub.end - 14, sub.end], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const opacity = Math.min(fadeIn, fadeOut);

        // 中文略微从下往上进入
        const zhY = interpolate(fadeIn, [0, 1], [18, 0]);
        // 英文略微从上往下进入
        const enY = interpolate(fadeIn, [0, 1], [-18, 0]);

        if (opacity <= 0) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 100,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity,
            }}
          >
            {/* 繁体中文（大字，黄色） */}
            <div
              style={{
                fontSize: 58,
                fontWeight: 700,
                color: "#facc15",
                fontFamily: "sans-serif",
                letterSpacing: 3,
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 20px rgba(250,204,21,0.3)",
                transform: `translateY(${zhY}px)`,
                lineHeight: 1.3,
              }}
            >
              {sub.zh}
            </div>

            {/* 分隔线 */}
            <div
              style={{
                width: 60,
                height: 1,
                background: "rgba(255,255,255,0.2)",
                marginTop: 8,
                marginBottom: 8,
              }}
            />

            {/* 英文翻译（小字，白色） */}
            <div
              style={{
                fontSize: 32,
                fontWeight: 400,
                color: "#e2e8f0",
                fontFamily: "sans-serif",
                letterSpacing: 1,
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                transform: `translateY(${enY}px)`,
                fontStyle: "italic",
              }}
            >
              {sub.en}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export const subtitleDualLangDefaultProps = {}
