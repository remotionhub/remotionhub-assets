import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const LogoIconReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // frame 0_25：图标区块从 scale(0) spring 弹入
  const iconScale = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 200 },
    durationInFrames: 25,
  });

  // frame 25_50：SVG 路径描绘（stroke-dashoffset）
  const pathProgress = interpolate(frame, [25, 50], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 50_80：品牌名称从右侧滑入
  const brandX = interpolate(frame, [50, 80], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandOpacity = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 75_100：副标语淡入
  const taglineOpacity = interpolate(frame, [75, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 图标 + 文字水平并排 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* 图标区块 */}
        <div
          style={{
            transform: `scale(${iconScale})`,
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* 闪电形 SVG 符号 */}
          <svg
            width="40"
            height="44"
            viewBox="0 0 40 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 2L6 26H20L16 42L34 18H20L24 2Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset={pathProgress}
            />
          </svg>
        </div>

        {/* 文字区块 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            transform: `translateX(${brandX}px)`,
            opacity: brandOpacity,
          }}
        >
          {/* 品牌名称 */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              whiteSpace: "nowrap",
            }}
          >
            Acme Studio
          </div>

          {/* 副标语 */}
          <div
            style={{
              opacity: taglineOpacity,
              fontSize: 20,
              fontWeight: 400,
              color: "#6b7280",
              fontFamily: "sans-serif",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
          >
            Design · Build · Launch
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const logoIconRevealDefaultProps = {}
