import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const SceneA: React.FC = () => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: 80,
        fontWeight: 700,
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      Scene A
    </div>
  </AbsoluteFill>
);

const SceneB: React.FC = () => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: 80,
        fontWeight: 700,
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      Scene B
    </div>
  </AbsoluteFill>
);

export const TransitionDiagonalWipe: React.FC = () => {
  const frame = useCurrentFrame();

  // progress 从 0→1，对应 frame 15_75
  const progress = interpolate(frame, [15, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 倾斜带状切割：从左移到右，逐渐遮盖场景 A
  const clipPath = `polygon(
    ${(progress - 1) * 1920}px 0,
    ${progress * 1920 + 500}px 0,
    ${progress * 1920}px 1080px,
    ${(progress - 1) * 1920 - 500}px 1080px
  )`;

  return (
    <AbsoluteFill>
      {/* 底层：场景 B */}
      <SceneB />

      {/* 上层：场景 A，套上对角线 clip-path */}
      <AbsoluteFill style={{ clipPath }}>
        <SceneA />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const transitionDiagonalWipeDefaultProps = {}
