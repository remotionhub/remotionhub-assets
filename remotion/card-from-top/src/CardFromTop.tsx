import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export type CardFromTopProps = {
  name: string;
  title: string;
  accentColor: string;
  titleColor: string;
  cardBackgroundColor: string;
  animationStiffness: number;
};

export const cardFromTopDefaultProps: CardFromTopProps = {
  name: "Maria Chen",
  title: "Motion Designer",
  accentColor: "#f59e0b",
  titleColor: "#fde68a",
  cardBackgroundColor: "rgba(15, 23, 42, 0.92)",
  animationStiffness: 140,
};

export const CardFromTop: React.FC<CardFromTopProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideProgress = spring({ frame, fps, config: { damping: 22, stiffness: animationStiffness } });
  const textProgress = spring({ frame: frame - 10, fps, config: { damping: 25, stiffness: 110 } });

  const y = interpolate(slideProgress, [0, 1], [-200, 0]);
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #1a1a2e 100%)",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 60,
      }}
    >
      <div
        style={{
          transform: `translateY(${y}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: cardBackgroundColor,
            paddingLeft: 48,
            paddingRight: 48,
            paddingTop: 20,
            paddingBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
        <div style={{ height: 4, background: accentColor, width: "100%" }} />
      </div>
    </AbsoluteFill>
  );
};
