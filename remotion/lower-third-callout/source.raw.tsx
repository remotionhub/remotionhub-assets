import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

// Subject point (upper area — what's being annotated)
const DOT_X = 700;
const DOT_Y = 310;
// Text box anchor (lower third — where the label sits)
const BOX_X = 860;
const BOX_Y = 820;

const LINE_LEN = Math.sqrt((BOX_X - DOT_X) ** 2 + (BOX_Y - DOT_Y) ** 2);
const ANGLE = (Math.atan2(BOX_Y - DOT_Y, BOX_X - DOT_X) * 180) / Math.PI;

export const LowerThirdCallout: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineProgress = spring({ frame, fps, config: { damping: 25, stiffness: 150 } });
  const boxProgress = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 200 } });

  const lineWidth = interpolate(lineProgress, [0, 1], [0, LINE_LEN]);
  const dotOpacity = interpolate(lineProgress, [0, 0.2], [0, 1], { extrapolateRight: "clamp" });
  const boxScale = interpolate(boxProgress, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}>
      {/* Dot at the subject point (upper area) */}
      <div
        style={{
          position: "absolute",
          left: DOT_X - 8,
          top: DOT_Y - 8,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#f59e0b",
          opacity: dotOpacity,
        }}
      />
      {/* Line from subject down to text box */}
      <div
        style={{
          position: "absolute",
          left: DOT_X,
          top: DOT_Y,
          width: lineWidth,
          height: 2,
          background: "#f59e0b",
          transformOrigin: "left center",
          transform: `rotate(${ANGLE}deg)`,
        }}
      />
      {/* Text box in the lower third */}
      <div
        style={{
          position: "absolute",
          left: BOX_X + 8,
          top: BOX_Y - 28,
          transform: `scale(${boxScale})`,
          transformOrigin: "left center",
          background: "#f59e0b",
          paddingLeft: 16,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", fontFamily: "sans-serif" }}>
          Product Feature
        </div>
        <div style={{ fontSize: 14, color: "#451a03", fontFamily: "sans-serif", marginTop: 3 }}>
          Tap to learn more
        </div>
      </div>
    </AbsoluteFill>
  );
};
