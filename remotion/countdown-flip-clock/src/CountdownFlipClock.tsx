import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface FlipDigitProps {
  current: string;
  prev: string;
  isFlipping: boolean;
  flipProgress: number;
  cardBgColor: string;
  cardTextColor: string;
  cardBottomBgColor: string;
}

const FlipDigit: React.FC<FlipDigitProps> = ({
  current,
  prev,
  isFlipping,
  flipProgress,
  cardBgColor,
  cardTextColor,
  cardBottomBgColor,
}) => {
  const topFlipAngle = interpolate(flipProgress, [0, 0.5], [0, -90], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bottomFlipAngle = interpolate(flipProgress, [0.5, 1], [90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const showNewTop = flipProgress >= 0.5;

  const cardW = 140;
  const cardH = 180;
  const halfH = cardH / 2;

  const cardStyle: React.CSSProperties = {
    width: cardW,
    height: cardH,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
    background: cardBgColor,
  };

  const digitStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    fontSize: 120,
    fontWeight: 900,
    color: cardTextColor,
    fontFamily: "monospace",
    textAlign: "center",
    lineHeight: `${cardH}px`,
    userSelect: "none",
  };

  return (
    <div style={cardStyle}>
      {/* 静态下半（当前数字底部） */}
      <div
        style={{
          position: "absolute",
          top: halfH,
          left: 0,
          width: cardW,
          height: halfH,
          overflow: "hidden",
          borderTop: "1px solid rgba(0,0,0,0.4)",
          background: cardBottomBgColor,
          borderRadius: "0 0 12px 12px",
        }}
      >
        <div style={{ ...digitStyle, top: -halfH }}>{current}</div>
      </div>

      {/* 静态上半 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: cardW,
          height: halfH,
          overflow: "hidden",
          background: cardBgColor,
          borderRadius: "12px 12px 0 0",
        }}
      >
        <div style={{ ...digitStyle, top: 0 }}>
          {showNewTop ? current : prev}
        </div>
      </div>

      {/* 翻转牌片 — 上半翻下 */}
      {isFlipping && flipProgress < 0.5 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: cardW,
            height: halfH,
            overflow: "hidden",
            background: cardBgColor,
            borderRadius: "12px 12px 0 0",
            transformOrigin: "bottom center",
            transform: `perspective(600px) rotateX(${topFlipAngle}deg)`,
            zIndex: 10,
            backfaceVisibility: "hidden",
          }}
        >
          <div style={{ ...digitStyle, top: 0 }}>{prev}</div>
        </div>
      )}

      {/* 翻转牌片 — 下半展开 */}
      {isFlipping && flipProgress >= 0.5 && (
        <div
          style={{
            position: "absolute",
            top: halfH,
            left: 0,
            width: cardW,
            height: halfH,
            overflow: "hidden",
            background: cardBottomBgColor,
            borderRadius: "0 0 12px 12px",
            transformOrigin: "top center",
            transform: `perspective(600px) rotateX(${bottomFlipAngle}deg)`,
            zIndex: 10,
            backfaceVisibility: "hidden",
          }}
        >
          <div style={{ ...digitStyle, top: -halfH }}>{current}</div>
        </div>
      )}

      {/* 中间分隔线 */}
      <div
        style={{
          position: "absolute",
          top: halfH - 1,
          left: 0,
          width: "100%",
          height: 2,
          background: "rgba(0,0,0,0.5)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

interface FlipGroupProps {
  currentVal: string;
  prevVal: string;
  isFlipping: boolean;
  flipProgress: number;
  cardBgColor: string;
  cardTextColor: string;
  cardBottomBgColor: string;
}

const FlipGroup: React.FC<FlipGroupProps> = ({
  currentVal,
  prevVal,
  isFlipping,
  flipProgress,
  cardBgColor,
  cardTextColor,
  cardBottomBgColor,
}) => {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      <FlipDigit
        current={currentVal[0]}
        prev={prevVal[0]}
        isFlipping={isFlipping && currentVal[0] !== prevVal[0]}
        flipProgress={flipProgress}
        cardBgColor={cardBgColor}
        cardTextColor={cardTextColor}
        cardBottomBgColor={cardBottomBgColor}
      />
      <FlipDigit
        current={currentVal[1]}
        prev={prevVal[1]}
        isFlipping={isFlipping && currentVal[1] !== prevVal[1]}
        flipProgress={flipProgress}
        cardBgColor={cardBgColor}
        cardTextColor={cardTextColor}
        cardBottomBgColor={cardBottomBgColor}
      />
    </div>
  );
};

export interface CountdownFlipClockProps {
  totalSeconds?: number;
  title?: string;
  cardBgColor?: string;
  cardTextColor?: string;
  cardBottomBgColor?: string;
}

export const countdownFlipClockDefaultProps: CountdownFlipClockProps = {
  totalSeconds: 60,
  title: "倒数计时",
  cardBgColor: "#1a1a2e",
  cardTextColor: "#f5f5f0",
  cardBottomBgColor: "#16213e",
};

export const CountdownFlipClock: React.FC<CountdownFlipClockProps> = ({
  totalSeconds = 60,
  title = "倒数计时",
  cardBgColor = "#1a1a2e",
  cardTextColor = "#f5f5f0",
  cardBottomBgColor = "#16213e",
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const totalFrames = durationInFrames;
  const framesPerSecond = totalFrames / totalSeconds;

  const elapsed = (frame / totalFrames) * totalSeconds;
  const currentSecTotal = Math.max(0, totalSeconds - Math.floor(elapsed));
  const prevSecTotal = Math.min(totalSeconds, currentSecTotal + 1);

  const currentMin = Math.floor(currentSecTotal / 60);
  const currentSec = currentSecTotal % 60;
  const prevMin = Math.floor(prevSecTotal / 60);
  const prevSec = prevSecTotal % 60;

  const currentMinStr = pad(currentMin);
  const currentSecStr = pad(currentSec);
  const prevMinStr = pad(prevMin);
  const prevSecStr = pad(prevSec);

  const frameWithinSecond = frame % framesPerSecond;
  const flipDuration = framesPerSecond * 0.4;
  const isFlipping = frameWithinSecond < flipDuration && frame > 0;
  const flipProgress = isFlipping
    ? interpolate(frameWithinSecond, [0, flipDuration], [0, 1], {
        extrapolateRight: "clamp",
      })
    : frame === 0
    ? 0
    : 1;

  const secIsFlipping = isFlipping && currentSecStr !== prevSecStr;
  const minIsFlipping = isFlipping && currentMinStr !== prevMinStr;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #0d0d1a 0%, #1a1030 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 装饰光晕 */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: 200,
          fontSize: 36,
          fontWeight: 300,
          color: "rgba(255,255,255,0.4)",
          fontFamily: "sans-serif",
          letterSpacing: 12,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>

      {/* 翻页时钟主体 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* 分钟 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <FlipGroup
            currentVal={currentMinStr}
            prevVal={prevMinStr}
            isFlipping={minIsFlipping}
            flipProgress={flipProgress}
            cardBgColor={cardBgColor}
            cardTextColor={cardTextColor}
            cardBottomBgColor={cardBottomBgColor}
          />
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.3)",
              fontFamily: "sans-serif",
              letterSpacing: 6,
            }}
          >
            分
          </div>
        </div>

        {/* 冒号分隔 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            paddingBottom: 32,
          }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: interpolate(
                  Math.sin(frame * 0.15),
                  [-1, 1],
                  [0.3, 1]
                ) > 0.6
                  ? "#6366f1"
                  : "rgba(99,102,241,0.3)",
                boxShadow: "0 0 8px rgba(99,102,241,0.6)",
              }}
            />
          ))}
        </div>

        {/* 秒 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <FlipGroup
            currentVal={currentSecStr}
            prevVal={prevSecStr}
            isFlipping={secIsFlipping}
            flipProgress={flipProgress}
            cardBgColor={cardBgColor}
            cardTextColor={cardTextColor}
            cardBottomBgColor={cardBottomBgColor}
          />
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.3)",
              fontFamily: "sans-serif",
              letterSpacing: 6,
            }}
          >
            秒
          </div>
        </div>
      </div>

      {/* 底部阴影装饰 */}
      <div
        style={{
          position: "absolute",
          bottom: 180,
          display: "flex",
          gap: 32,
        }}
      >
        {["分", "秒"].map((label) => (
          <div
            key={label}
            style={{
              width: 296,
              height: 12,
              background: "rgba(0,0,0,0.4)",
              borderRadius: "50%",
              filter: "blur(6px)",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
