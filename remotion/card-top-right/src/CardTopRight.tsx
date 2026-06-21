import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export type CardTopRightProps = {
  name: string;
  title: string;
  accentColor: string;
  titleColor: string;
  cardBackgroundColor: string;
  animationStiffness: number;
  textDelay: number;
};

export const cardTopRightDefaultProps: CardTopRightProps = {
  name: "Alex Johnson",
  title: "Lead Engineer",
  accentColor: "#4ade80",
  titleColor: "#bbf7d0",
  cardBackgroundColor: "#052e16",
  animationStiffness: 140,
  textDelay: 10,
};

export const CardTopRight: React.FC<CardTopRightProps> = ({
  name,
  title,
  accentColor,
  titleColor,
  cardBackgroundColor,
  animationStiffness,
  textDelay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideProgress = spring({ frame, fps, config: { damping: 22, stiffness: animationStiffness } });
  const textProgress = spring({ frame: frame - textDelay, fps, config: { damping: 25, stiffness: 110 } });

  const x = interpolate(slideProgress, [0, 1], [600, 0]);
  const textOpacity = interpolate(textProgress, [0, 0.4], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #052e16 0%, #0f172a 100%)",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingTop: 60,
        paddingRight: 0,
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
        <div style={{ width: 4, background: accentColor, flexShrink: 0 }} />
        <div
          style={{
            background: cardBackgroundColor,
            paddingRight: 24,
            paddingLeft: 24,
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
              textAlign: "right",
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
              textAlign: "right",
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
