import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const LogoTriangleForm: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 大三角形等边，高 220px，中心约 960, 430
  // 顶点：顶部 (960, 320)；左下 (833, 540)；右下 (1087, 540)
  // 四个小三角形组成：
  // 左下小三角：(833,540) (960,540) (896,430) → 蓝色
  // 右下小三角：(960,540) (1087,540) (1024,430) → 紫色
  // 顶部小三角：(896,430) (1024,430) (960,320) → 青色
  // 中央倒三角（负空间）：(896,430) (1024,430) (960,540) → 背景色

  // spring helper：对每个三角形计算 spring 进度
  const makeSpring = (startFrame: number) =>
    spring({
      frame: frame - startFrame,
      fps,
      config: { damping: 18, stiffness: 120, mass: 1 },
      durationInFrames: 40,
    });

  // 各三角形 spring 进度（stagger 12 帧）
  const prog0 = makeSpring(0);  // 左下
  const prog1 = makeSpring(12); // 右下
  const prog2 = makeSpring(24); // 顶部

  // 左下三角：从 (-300, 200) → (0, 0)
  const blTx = interpolate(prog0, [0, 1], [-300, 0]);
  const blTy = interpolate(prog0, [0, 1], [200, 0]);

  // 右下三角：从 (300, 200) → (0, 0)
  const brTx = interpolate(prog1, [0, 1], [300, 0]);
  const brTy = interpolate(prog1, [0, 1], [200, 0]);

  // 顶部三角 Y 轴偏移（从 -300 飞入 0）
  const topTriY = interpolate(prog2, [0, 1], [-300, 0]);

  // frame 60_90：中央倒三角（负空间）scale 0→1
  const negTriScale = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 80_105：品牌名 y:+30→0，opacity 0→1
  const brandY = interpolate(frame, [80, 105], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const brandOpacity = interpolate(frame, [80, 105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // frame 100_120：副标语淡入
  const taglineOpacity = interpolate(frame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* 左下小三角（蓝色）：从左下飞入 */}
        <polygon
          points="833,540 960,540 896,430"
          fill="#3b82f6"
          transform={`translate(${blTx}, ${blTy})`}
        />

        {/* 右下小三角（紫色）：从右下飞入 */}
        <polygon
          points="960,540 1087,540 1024,430"
          fill="#8b5cf6"
          transform={`translate(${brTx}, ${brTy})`}
        />

        {/* 顶部小三角（青色）：从顶部飞入 */}
        <polygon
          points="896,430 1024,430 960,320"
          fill="#06b6d4"
          transform={`translate(0, ${topTriY})`}
        />

        {/* 中央倒三角（负空间，背景色）：scale 0→1 */}
        <polygon
          points="896,430 1024,430 960,540"
          fill="#0f0f0f"
          transform={`translate(960, 485) scale(${negTriScale}) translate(-960, -485)`}
        />
      </svg>

      {/* 品牌名与副标语 */}
      <div
        style={{
          position: "absolute",
          top: 570,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            opacity: brandOpacity,
            transform: `translateY(${brandY}px)`,
          }}
        >
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "sans-serif",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Triform
          </span>
        </div>

        <div
          style={{
            opacity: taglineOpacity,
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: "#6b7280",
              fontFamily: "sans-serif",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            Built to last.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const logoTriangleFormDefaultProps = {}
