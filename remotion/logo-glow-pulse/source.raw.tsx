import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const LogoGlowPulse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // frame 0-40：菱形 scale(0) spring 弹入
  const diamondScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 180 },
    durationInFrames: 40,
  });

  // frame 0-40：背景辐射渐层 opacity 0→0.4
  const bgGradientOpacity = interpolate(frame, [0, 40], [0, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 35-65：外围光晕 opacity 0→0.7
  const glowOpacity = interpolate(frame, [35, 65], [0, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 持续脉冲：sin 波动
  const pulse = Math.sin(frame * 0.12) * 0.3 + 0.7;

  // 最终光晕 opacity（结合淡入和脉冲）
  const finalGlowOpacity = glowOpacity * pulse;

  // frame 50-80：「GX」品牌缩写淡入
  const abbrevOpacity = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 75-100：品牌名「GlowX」从下方滑入
  const brandY = interpolate(frame, [75, 100], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandOpacity = interpolate(frame, [75, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 95-120：状态列淡入
  const statusOpacity = interpolate(frame, [95, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#050505",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 背景辐射渐层 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, #7c3aed22 0%, transparent 60%)",
          opacity: bgGradientOpacity,
          pointerEvents: "none",
        }}
      />

      {/* 外围光晕（模糊的菱形） */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 160,
          height: 160,
          transform: `translate(-50%, -50%) rotate(45deg) scale(${diamondScale})`,
          background: "linear-gradient(135deg, #7c3aed, #2563eb)",
          filter: "blur(20px)",
          opacity: finalGlowOpacity,
          borderRadius: 8,
        }}
      />

      {/* 主菱形 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 120,
          height: 120,
          transform: `translate(-50%, -50%) rotate(45deg) scale(${diamondScale})`,
          background: "linear-gradient(135deg, #7c3aed, #2563eb)",
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      {/* 菱形内品牌缩写「GX」（需要反向旋转） */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${diamondScale})`,
          fontSize: 60,
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "sans-serif",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          opacity: abbrevOpacity,
          userSelect: "none",
        }}
      >
        GX
      </div>

      {/* 品牌名「GlowX」 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 540 + 90,
          transform: `translateX(-50%) translateY(${brandY}px)`,
          fontSize: 52,
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
          opacity: brandOpacity,
          whiteSpace: "nowrap",
        }}
      >
        GlowX
      </div>

      {/* 状态指示列：绿点 + ONLINE */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 540 + 90 + 64,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          opacity: statusOpacity,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#22c55e",
            fontFamily: "sans-serif",
            letterSpacing: "3px",
          }}
        >
          ONLINE
        </span>
      </div>
    </AbsoluteFill>
  );
};
