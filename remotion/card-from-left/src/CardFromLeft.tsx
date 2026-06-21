import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export type CardFromLeftProps = {
  name: string;
  title: string;
  lineColor: string;
  titleColor: string;
  backgroundColor: string;
  stiffness: number;
};

export const cardFromLeftDefaultProps: CardFromLeftProps = {
  name: "Jane Smith",
  title: "Creative Director",
  lineColor: "#ef4444",
  titleColor: "#fca5a5",
  backgroundColor: "rgba(15, 23, 42, 0.92)",
  stiffness: 140,
};

export const CardFromLeft: React.FC<CardFromLeftProps> = ({
  name,
  title,
  lineColor,
  titleColor,
  backgroundColor,
  stiffness,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideProgress = spring({ frame, fps, config: { damping: 22, stiffness } });
  const textProgress = spring({ frame: frame - 10, fps, config: { damping: 25, stiffness: 110 } });

  const x = interpolate(slideProgress, [0, 1], [-700, 0]);
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1a0a0a 0%, #0f172a 100%)",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingBottom: 80,
        paddingLeft: 0,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          display: "flex",
          alignItems: "stretch",
          height: 90,
        }}
      >
        <div style={{ width: 4, background: lineColor, flexShrink: 0 }} />
        <div
          style={{
            background: backgroundColor,
            paddingLeft: 24,
            paddingRight: 52,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "sans-serif",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 20,
              color: titleColor,
              fontFamily: "sans-serif",
              marginTop: 2,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
