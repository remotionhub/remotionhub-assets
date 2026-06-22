import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

const SUBTITLES = [
  { text: "欢迎来到 Remotion 动画世界", start: 10, end: 60 },
  { text: "用代码创作令人惊艳的视频", start: 70, end: 120 },
  { text: "支持 React 组件与所有动画效果", start: 130, end: 180 },
  { text: "开始你的第一个 Remotion 项目吧！", start: 190, end: 240 },
];

export const SubtitleFade: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
            "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      {SUBTITLES.map((sub, i) => {
        const fadeIn = interpolate(frame, [sub.start, sub.start + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const fadeOut = interpolate(frame, [sub.end - 12, sub.end], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const opacity = Math.min(fadeIn, fadeOut);

        if (opacity <= 0) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: 120,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              opacity,
            }}
          >
            <div
              style={{
                background: "rgba(0,0,0,0.72)",
                borderRadius: 8,
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 48,
                paddingRight: 48,
                maxWidth: "80%",
              }}
            >
              <span
                style={{
                  fontSize: 52,
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "sans-serif",
                  letterSpacing: 2,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                  lineHeight: 1.4,
                }}
              >
                {sub.text}
              </span>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export const subtitleFadeDefaultProps = {}
