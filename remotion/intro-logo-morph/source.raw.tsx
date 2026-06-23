import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const LogoMorphIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // frame 0-30：圆形从 scale(0) → scale(1) 出现
  const shapeScale = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 30-70：border-radius 从 50% → 12px，颜色从白 → #3b82f6
  const morphProgress = interpolate(frame, [30, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const borderRadius = interpolate(morphProgress, [0, 1], [50, 12]);
  // 颜色插值：白(255,255,255) → 蓝(59,130,246)
  const r = Math.round(interpolate(morphProgress, [0, 1], [255, 59]));
  const g = Math.round(interpolate(morphProgress, [0, 1], [255, 130]));
  const b = Math.round(interpolate(morphProgress, [0, 1], [255, 246]));
  const shapeColor = `rgb(${r}, ${g}, ${b})`;

  // frame 70-100：缩写文字 fade in
  const abbrevOpacity = interpolate(frame, [70, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 100-130：品牌全名从右侧滑入
  const brandX = interpolate(frame, [100, 130], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 120：副标题淡入
  const taglineOpacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Logo 方块 + 品牌名称 并排 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* 几何形状（圆形 → 圆角方形） */}
        <div
          style={{
            position: "relative",
            width: 120,
            height: 120,
            transform: `scale(${shapeScale})`,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: `${borderRadius}%`,
              background: shapeColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 品牌缩写 */}
            <span
              style={{
                opacity: abbrevOpacity,
                fontSize: 48,
                fontWeight: 900,
                color: "#ffffff",
                fontFamily: "sans-serif",
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}
            >
              RC
            </span>
          </div>
        </div>

        {/* 品牌名称区块 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            transform: `translateX(${brandX}px)`,
            opacity: brandOpacity,
          }}
        >
          {/* 品牌全名 */}
          <div
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "sans-serif",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              whiteSpace: "nowrap",
            }}
          >
            Remotion Community
          </div>

          {/* 副标题 */}
          <div
            style={{
              opacity: taglineOpacity,
              fontSize: 18,
              fontWeight: 400,
              color: "#64748b",
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            繁体中文社群入口网站
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
