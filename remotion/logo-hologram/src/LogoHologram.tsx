import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const LogoHologram: React.FC = () => {
  const frame = useCurrentFrame();

  // frame 0_20：整体容器淡入 + scaleY 1.2→1.0
  const containerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const containerScaleY = interpolate(frame, [0, 20], [1.2, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 扫描线位置：持续循环，frame * 2 - 150，clamp 在 -150 到 150
  const rawScanY = (frame * 2) % 300 - 150;

  // 微幅闪烁 opacity（整体）
  const flickerOpacity = 0.85 + 0.15 * Math.sin(frame * 0.3);

  // 六芒星两个三角形描边：frame 20_60
  const starPerimeter = 480; // 六芒星近似周长
  const starStrokeOffset = interpolate(frame, [20, 60], [starPerimeter, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 55_85：「AI」字样淡入
  const aiOpacity = interpolate(frame, [55, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 70_100：品牌名淡入
  const brandOpacity = interpolate(frame, [70, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandY = interpolate(frame, [70, 100], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 90_115：状态文字淡入
  const statusOpacity = interpolate(frame, [90, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 六芒星顶点计算（两个等边三角形，中心 960,430，半径 80px）
  const cx = 960;
  const cy = 430;
  const r = 80;

  // 三角形 1（朝上）
  const t1Points = [
    [cx + r * Math.sin(0), cy - r * Math.cos(0)],
    [cx + r * Math.sin((2 * Math.PI) / 3), cy - r * Math.cos((2 * Math.PI) / 3)],
    [cx + r * Math.sin((4 * Math.PI) / 3), cy - r * Math.cos((4 * Math.PI) / 3)],
  ]
    .map((p) => p.join(","))
    .join(" ");

  // 三角形 2（旋转 60°，朝下）
  const t2Points = [
    [cx + r * Math.sin(Math.PI / 3), cy - r * Math.cos(Math.PI / 3)],
    [cx + r * Math.sin(Math.PI), cy - r * Math.cos(Math.PI)],
    [cx + r * Math.sin((5 * Math.PI) / 3), cy - r * Math.cos((5 * Math.PI) / 3)],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <AbsoluteFill
      style={{
        background: "#050a0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 整体容器（控制淡入与 scaleY） */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: containerOpacity * flickerOpacity,
          transform: `scaleY(${containerScaleY})`,
        }}
      >
        {/* SVG：六芒星 + 扫描线范围遮罩 */}
        <svg
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* 六芒星三角形 1 */}
          <polygon
            points={t1Points}
            stroke="#00ffff"
            strokeWidth="2"
            fill="rgba(0,255,255,0.05)"
            strokeDasharray={starPerimeter}
            strokeDashoffset={starStrokeOffset}
          />
          {/* 六芒星三角形 2 */}
          <polygon
            points={t2Points}
            stroke="#0ea5e9"
            strokeWidth="2"
            fill="rgba(14,165,233,0.05)"
            strokeDasharray={starPerimeter}
            strokeDashoffset={starStrokeOffset}
          />

          {/* 外圈光晕圆形 */}
          <circle
            cx={cx}
            cy={cy}
            r="105"
            stroke="rgba(0,255,255,0.15)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* 扫描线（横向渐层，从上到下循环移动） */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: cy + rawScanY,
            transform: "translateX(-50%)",
            width: 300,
            height: 3,
            background: "linear-gradient(to right, transparent, #00ffff, transparent)",
            opacity: 0.7,
          }}
        />

        {/* 「AI」字样（中心） */}
        <div
          style={{
            position: "absolute",
            top: cy - 30,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: aiOpacity,
          }}
        >
          <span
            style={{
              fontSize: 50,
              fontWeight: 900,
              color: "#00ffff",
              fontFamily: "monospace",
              letterSpacing: "-0.02em",
              textShadow: "0 0 20px #00ffff, 0 0 40px rgba(0,255,255,0.5)",
            }}
          >
            AI
          </span>
        </div>

        {/* 品牌名 */}
        <div
          style={{
            position: "absolute",
            top: cy + 120,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            opacity: brandOpacity,
            transform: `translateY(${brandY}px)`,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#00ffff",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              textShadow: "0 0 15px rgba(0,255,255,0.6)",
            }}
          >
            Hologram.ai
          </span>
        </div>

        {/* 状态文字 */}
        <div
          style={{
            position: "absolute",
            top: cy + 170,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            opacity: statusOpacity,
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "rgba(0,255,255,0.7)",
              fontFamily: "monospace",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const logoHologramDefaultProps = {}
