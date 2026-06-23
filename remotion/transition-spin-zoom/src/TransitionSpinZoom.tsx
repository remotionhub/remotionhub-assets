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

export const TransitionSpinZoom: React.FC = () => {
  const frame = useCurrentFrame();

  // progress 从 0→1，对应 frame 15_75
  const progress = interpolate(frame, [15, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* 场景 B：旋转缩小进来，再放大到正常 */}
      <AbsoluteFill
        style={{
          transform: `rotate(${(1 - progress) * -180}deg) scale(${progress})`,
          transformOrigin: "center center",
          opacity: progress,
        }}
      >
        <SceneB />
      </AbsoluteFill>

      {/* 场景 A：旋转同时缩小消失 */}
      <AbsoluteFill
        style={{
          transform: `rotate(${progress * 180}deg) scale(${1 - progress})`,
          transformOrigin: "center center",
          opacity: 1 - progress,
        }}
      >
        <SceneA />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const transitionSpinZoomDefaultProps = {}
