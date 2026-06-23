import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// 时间轴
const TITLE_IN        = 10;  // 「继续观看」淡入
const LEFT_CARD_IN    = 20;  // 左视频框滑入
const RIGHT_CARD_IN   = 30;  // 右视频框滑入
const AVATAR_IN       = 60;  // 频道头像弹出
const SUB_BTN_IN      = 80;  // 订阅按钮弹入

export const OutroEndScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── 标题 fade in ──
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── 左视频框：从左滑入 ──
  const leftSpring = spring({
    frame: frame - LEFT_CARD_IN,
    fps,
    config: { damping: 20, stiffness: 120 },
  });
  const leftX = interpolate(leftSpring, [0, 1], [-100, 0]);
  const leftOpacity = interpolate(leftSpring, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  // ── 右视频框：从右滑入 ──
  const rightSpring = spring({
    frame: frame - RIGHT_CARD_IN,
    fps,
    config: { damping: 20, stiffness: 120 },
  });
  const rightX = interpolate(rightSpring, [0, 1], [100, 0]);
  const rightOpacity = interpolate(rightSpring, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  // ── 频道头像：scale 0→1 弹出 ──
  const avatarSpring = spring({
    frame: frame - AVATAR_IN,
    fps,
    config: { damping: 14, stiffness: 160 },
  });
  const avatarScale = interpolate(avatarSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── 订阅按钮：弹入 ──
  const subSpring = spring({
    frame: frame - SUB_BTN_IN,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const subScale = interpolate(subSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0f0f0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* 顶部标题 */}
      <div
        style={{
          opacity: titleOpacity,
          fontSize: 32,
          color: "#ffffff",
          letterSpacing: "4px",
          fontWeight: 600,
          marginBottom: 48,
        }}
      >
        继续观看
      </div>

      {/* 视频占位框区域 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
          marginBottom: 60,
        }}
      >
        {/* 左视频框 */}
        <div
          style={{
            transform: `translateX(${leftX}px)`,
            opacity: leftOpacity,
            width: 480,
            height: 270,
            borderRadius: 12,
            background: "#272727",
            border: "1px solid #404040",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* 缩图占位（上半部） */}
          <div
            style={{
              width: "100%",
              height: 180,
              background: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* 缩图纹理 */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1f1f1f 25%, #252525 75%)",
              }}
            />
          </div>

          {/* 右上角 play 按钮 */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 16, marginLeft: 3 }}>▶</span>
          </div>

          {/* 下半部文字 */}
          <div
            style={{
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                height: 16,
                width: "70%",
                borderRadius: 4,
                background: "#404040",
              }}
            />
            <div
              style={{
                height: 12,
                width: "40%",
                borderRadius: 4,
                background: "#333333",
              }}
            />
          </div>
        </div>

        {/* 右视频框 */}
        <div
          style={{
            transform: `translateX(${rightX}px)`,
            opacity: rightOpacity,
            width: 480,
            height: 270,
            borderRadius: 12,
            background: "#272727",
            border: "1px solid #404040",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* 缩图占位（上半部） */}
          <div
            style={{
              width: "100%",
              height: 180,
              background: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1f2a1f 25%, #1f251f 75%)",
              }}
            />
          </div>

          {/* 右上角 play 按钮 */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.75)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: 16, marginLeft: 3 }}>▶</span>
          </div>

          {/* 下半部文字 */}
          <div
            style={{
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                height: 16,
                width: "60%",
                borderRadius: 4,
                background: "#404040",
              }}
            />
            <div
              style={{
                height: 12,
                width: "35%",
                borderRadius: 4,
                background: "#333333",
              }}
            />
          </div>
        </div>
      </div>

      {/* 底部：频道头像 + 订阅按钮 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* 频道头像圆形 */}
        <div
          style={{
            transform: `scale(${avatarScale})`,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#ff0000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 48, color: "#ffffff" }}>▶</span>
        </div>

        {/* 订阅按钮 */}
        <div
          style={{
            transform: `scale(${subScale})`,
            background: "#ff0000",
            color: "#ffffff",
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 22,
            borderRadius: 40,
            padding: "16px 40px",
            whiteSpace: "nowrap",
            letterSpacing: "1px",
          }}
        >
          订阅频道
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const outroEndScreenDefaultProps = {}
