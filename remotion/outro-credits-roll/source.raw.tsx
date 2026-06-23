import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const credits = [
  { role: "制作人 Producer", name: "张小明" },
  { role: "导演 Director", name: "李美丽" },
  { role: "摄影 Cinematographer", name: "王大伟" },
  { role: "剪辑 Editor", name: "陈志强" },
  { role: "音乐 Music", name: "林雅婷" },
];

export const CreditsRollOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // translateY 从 1080 → -800，在整个 210 frames 内线性移动
  const translateY = interpolate(frame, [0, durationInFrames], [1080, -800], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#000000",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* 左侧细线装饰 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          marginLeft: -320,
          top: 0,
          bottom: 0,
          width: 1,
          background: "rgba(255,255,255,0.12)",
        }}
      />
      {/* 右侧细线装饰 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          marginLeft: 320,
          top: 0,
          bottom: 0,
          width: 1,
          background: "rgba(255,255,255,0.12)",
        }}
      />

      {/* 卷动文字区块 */}
      <div
        style={{
          position: "absolute",
          width: 600,
          transform: `translateY(${translateY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {credits.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                fontSize: 18,
                color: "#888888",
                fontFamily: "sans-serif",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {item.role}
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#ffffff",
                fontFamily: "sans-serif",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              {item.name}
            </div>
          </div>
        ))}

        {/* 分隔线 */}
        <div
          style={{
            width: 120,
            height: 1,
            background: "rgba(255,255,255,0.25)",
            margin: "20px 0 40px",
          }}
        />

        {/* 感谢观看 */}
        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            fontFamily: "sans-serif",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: 12,
          }}
        >
          感谢观看
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#888888",
            fontFamily: "sans-serif",
            letterSpacing: "3px",
          }}
        >
          Thank you for watching
        </div>
      </div>
    </AbsoluteFill>
  );
};
