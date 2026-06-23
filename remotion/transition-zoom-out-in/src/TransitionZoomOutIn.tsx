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

export const TransitionZoomOutIn: React.FC = () => {
  const frame = useCurrentFrame();

  // 场景 A：frame 15_50 scale 1→0，opacity 1→0
  const scaleA = interpolate(frame, [15, 50], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacityA = interpolate(frame, [15, 50], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 场景 B：frame 50_80 scale 0→1，opacity 0→1
  const scaleB = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacityB = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "black" }}>
      {/* 场景 A：缩小消失 */}
      <AbsoluteFill
        style={{
          transform: `scale(${scaleA})`,
          opacity: opacityA,
        }}
      >
        <SceneA />
      </AbsoluteFill>

      {/* 场景 B：从小放大出现 */}
      <AbsoluteFill
        style={{
          transform: `scale(${scaleB})`,
          opacity: opacityB,
        }}
      >
        <SceneB />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const transitionZoomOutInDefaultProps = {}
