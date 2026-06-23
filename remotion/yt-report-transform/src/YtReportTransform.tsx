import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

export const REPORT_TRANSFORM_DURATION_FRAMES = 300;

const colors = {
  background: "#0B0F17",
  text: "#FFFFFF",
  accent: "#4DA3FF",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
  border: "rgba(77, 163, 255, 0.3)",
};

export const YtReportTransform: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [280, 300], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const masterOpacity = Math.min(fadeIn, fadeOut);

  const titleSpring = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 14, stiffness: 90 } });
  const beforeSpring = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 12, stiffness: 90 } });
  const arrowSpring = spring({ frame: Math.max(0, frame - 100), fps, config: { damping: 10, stiffness: 100 } });
  const afterSpring = spring({ frame: Math.max(0, frame - 120), fps, config: { damping: 12, stiffness: 90 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A0E14 0%, #111825 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: masterOpacity,
        fontFamily: "'Noto Sans TC', 'Inter', sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: titleSpring,
          transform: `translateY(${(1 - titleSpring) * 20}px)`,
        }}
      >
        <div style={{ fontSize: 63, fontWeight: 700, color: "#FFFFFF", textAlign: "center" }}>
          报告从「<span style={{ color: "#EF4444" }}>评分</span>」改成「<span style={{ color: "#10B981" }}>建议怎么开始做</span>」
        </div>
        <div
          style={{
            opacity: 0.4,
            fontSize: 30,
            color: "rgba(255,255,255,0.4)",
            marginTop: 9,
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
          }}
        >
          From scoring → actionable guidance on how to start
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginTop: 24 }}>
        {/* BEFORE */}
        <div
          style={{
            opacity: beforeSpring,
            transform: `scale(${beforeSpring})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 700,
              height: 380,
              borderRadius: 16,
              background: "rgba(239,68,68,0.08)",
              border: "2px solid rgba(239,68,68,0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {["问题 A：得分 62/100", "问题 B：得分 48/100", "问题 C：得分 71/100"].map((item, i) => (
              <div key={i} style={{ fontSize: 28, color: "rgba(239,68,68,0.7)", fontFamily: "'Inter', sans-serif" }}>{item}</div>
            ))}
          </div>
          <div style={{ marginTop: 18, background: "#EF4444", borderRadius: 16, padding: "6px 32px", fontSize: 22.5, fontWeight: 700, color: "#FFFFFF" }}>
            BEFORE
          </div>
        </div>

        {/* Arrow */}
        <div style={{ opacity: arrowSpring, transform: `scale(${arrowSpring})`, margin: "0 20px" }}>
          <svg width={80} height={80} viewBox="0 0 80 80">
            <line x1={10} y1={40} x2={55} y2={40} stroke="#10B981" strokeWidth={4} strokeLinecap="round" />
            <polygon points="55,28 75,40 55,52" fill="#10B981" />
          </svg>
        </div>

        {/* AFTER */}
        <div
          style={{
            opacity: afterSpring,
            transform: `scale(${afterSpring})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 700,
              height: 380,
              borderRadius: 16,
              background: "rgba(16,185,129,0.08)",
              border: "2px solid rgba(16,185,129,0.4)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {["步骤 1：先从问题 B 开始改善", "步骤 2：优先解决问题 A", "步骤 3：最后处理问题 C"].map((item, i) => (
              <div key={i} style={{ fontSize: 28, color: "rgba(16,185,129,0.8)", fontFamily: "'Noto Sans TC', sans-serif" }}>{item}</div>
            ))}
          </div>
          <div style={{ marginTop: 18, background: "#10B981", borderRadius: 16, padding: "6px 32px", fontSize: 22.5, fontWeight: 700, color: "#FFFFFF" }}>
            AFTER
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ytReportTransformDefaultProps = {}
