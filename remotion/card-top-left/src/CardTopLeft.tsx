import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export type CardTopLeftProps = {
  name: string;
  title: string;
  lineColor: string;
  titleColor: string;
  backgroundColor: string;
  stiffness: number;
  textDelay: number;
};

export const cardTopLeftDefaultProps: CardTopLeftProps = {
  name: "Jane Smith",
  title: "Creative Director",
  lineColor: "#38bdf8",
  titleColor: "#bae6fd",
  backgroundColor: "#0f172a",
  stiffness: 140,
  textDelay: 10,
};

export const CardTopLeft: React.FC<CardTopLeftProps> = ({
  name,
  title,
  lineColor,
  titleColor,
  backgroundColor,
  stiffness,
  textDelay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideProgress = spring({ frame, fps, config: { damping: 22, stiffness } });
  const textProgress = spring({ frame: frame - textDelay, fps, config: { damping: 25, stiffness: 110 } });

  const x = interpolate(slideProgress, [0, 1], [-600, 0]);
  const y = interpolate(slideProgress, [0, 1], [-100, 0]);
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 60,
        paddingLeft: 0,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px) translateY(${y}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            background: backgroundColor,
            paddingLeft: 24,
            paddingRight: 52,
            paddingTop: 16,
            paddingBottom: 16,
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
        <div style={{ height: 4, background: lineColor, flexShrink: 0 }} />
      </div>
    </AbsoluteFill>
  );
};
