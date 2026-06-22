import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const LogoRingFocus: React.FC = () => {
  const frame = useCurrentFrame();

  // frame 0-50：圆圈直径从 600→160，border 从 1px→3px，opacity 0.3→1
  const ringDiameter = interpolate(frame, [0, 50], [600, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringBorder = interpolate(frame, [0, 50], [1, 3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(frame, [0, 50], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // glow 强度：随着聚焦增强
  const glowBlur = interpolate(frame, [0, 50], [4, 18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glowSpread = interpolate(frame, [0, 50], [0, 6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 40-70：圆圈内部三条横线出现（汉堡菜单图标）
  const iconOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const iconScale = interpolate(frame, [40, 70], [0.6, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 65-90：品牌名「FOCUS LABS」淡入
  const brandOpacity = interpolate(frame, [65, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 85-110：标语「See clearly.」淡入
  const taglineOpacity = interpolate(frame, [85, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* 圆形光圈 */}
      <div
        style={{
          position: "relative",
          width: ringDiameter,
          height: ringDiameter,
          borderRadius: "50%",
          background: "#0f172a",
          border: `${ringBorder}px solid #ffffff`,
          opacity: ringOpacity,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: `drop-shadow(0 0 ${glowBlur}px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 ${glowSpread}px rgba(59, 130, 246, 0.4))`,
          flexShrink: 0,
        }}
      >
        {/* 汉堡选单图标（三条横线） */}
        <div
          style={{
            opacity: iconOpacity,
            transform: `scale(${iconScale})`,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? 32 : 44,
                height: 4,
                borderRadius: 2,
                background: "#ffffff",
              }}
            />
          ))}
        </div>
      </div>

      {/* 品牌名称 */}
      <div
        style={{
          marginTop: 40,
          opacity: brandOpacity,
          fontSize: 36,
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "sans-serif",
          letterSpacing: "8px",
          whiteSpace: "nowrap",
        }}
      >
        FOCUS LABS
      </div>

      {/* 标语（斜体灰色） */}
      <div
        style={{
          marginTop: 14,
          opacity: taglineOpacity,
          fontSize: 20,
          fontWeight: 400,
          fontStyle: "italic",
          color: "#6b7280",
          fontFamily: "sans-serif",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}
      >
        See clearly.
      </div>
    </AbsoluteFill>
  );
};
