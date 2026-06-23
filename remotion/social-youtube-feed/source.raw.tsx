import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

const VIDEOS = [
  {
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
    title: "用 React 做动画视频？Remotion 完整教学",
    channel: "工程师 Kai",
    views: "12万",
    viewsNum: 120000,
    time: "3天前",
    duration: "18:24",
  },
  {
    gradient: "linear-gradient(135deg, #0f3460, #533483)",
    title: "2025 前端必学技术清单（附学习路线）",
    channel: "前端周报",
    views: "8.4万",
    viewsNum: 84000,
    time: "1周前",
    duration: "24:11",
  },
  {
    gradient: "linear-gradient(135deg, #2d1b69, #11998e)",
    title: "TypeScript 进阶技巧 - 你不知道的 10 个用法",
    channel: "TS 大师",
    views: "23万",
    viewsNum: 230000,
    time: "2周前",
    duration: "31:05",
  },
  {
    gradient: "linear-gradient(135deg, #1a0533, #4a0080)",
    title: "从零打造个人品牌 - 软体工程师版",
    channel: "职涯设计师",
    views: "5.2万",
    viewsNum: 52000,
    time: "4天前",
    duration: "42:18",
  },
  {
    gradient: "linear-gradient(135deg, #003973, #e5e5be)",
    title: "React 19 新功能完整解析",
    channel: "React 台湾",
    views: "31万",
    viewsNum: 310000,
    time: "刚上传",
    duration: "28:33",
  },
  {
    gradient: "linear-gradient(135deg, #200122, #6f0000)",
    title: "Side Project 到底能不能赚钱？真实案例分享",
    channel: "创业者日记",
    views: "18万",
    viewsNum: 180000,
    time: "5天前",
    duration: "15:47",
  },
];

// Channel avatar colours at module scope
const CHANNEL-COLORS = [
  "#1d9bf0",
  "#f5576c",
  "#43e97b",
  "#fa709a",
  "#e5e5be",
  "#ff9a9e",
];
const CHANNEL-INITIALS = ["K", "周", "T", "职", "R", "创"];

const COLS = 3;
const ROWS = 2;
const CARD-W = 580;
const THUMB-H = Math.round((CARD-W * 9) / 16); // 326
const CARD-INFO-H = 100;
const CARD-H = THUMB-H + CARD-INFO-H;
const CARD-GAP = 24;

const GRID-TOTAL-W = COLS * CARD-W + (COLS - 1) * CARD-GAP;
const GRID-TOTAL-H = ROWS * CARD-H + (ROWS - 1) * CARD-GAP;
const GRID-LEFT = (1920 - GRID-TOTAL-W) / 2;
// Leave room for header (72px)
const GRID-TOP = 80 + (1080 - 80 - GRID-TOTAL-H) / 2;

// Pre-compute card positions
const CARD-POSITIONS = VIDEOS.map((_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
  x: GRID-LEFT + (i % COLS) * (CARD-W + CARD-GAP),
  y: GRID-TOP + Math.floor(i / COLS) * (CARD-H + CARD-GAP),
}));

function formatViewCount(n: number, progress: number): string {
  const v = Math.round(progress * n);
  if (v >= 10000) return (v / 10000).toFixed(1).replace(/\.0$/, "") + "万";
  return v.toLocaleString();
}

export const YoutubeFeed: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header fade in
  const headerOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Per-card spring
  const cardProgressList = VIDEOS.map((_, i) => {
    const startFrame = i * 10 + 5;
    return spring({
      frame: frame - startFrame,
      fps,
      config: { damping: 20, stiffness: 150 },
      durationInFrames: 18,
    });
  });

  // View count animate up after card appears
  const viewProgressList = VIDEOS.map((_, i) => {
    const start = i * 10 + 5 + 15;
    return interpolate(frame, [start, start + 30], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  });

  return (
    <AbsoluteFill
      style={{ background: "#0f0f0f", fontFamily: "sans-serif" }}
    >
      {/* YouTube-style header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          display: "flex",
          alignItems: "center",
          paddingLeft: GRID-LEFT,
          paddingRight: GRID-LEFT,
          gap: 16,
          opacity: headerOpacity,
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* YouTube logo (text version) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              background: "#ff0000",
              borderRadius: 6,
              width: 38,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: "12px solid #ffffff",
                marginLeft: 2,
              }}
            />
          </div>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -0.5,
            }}
          >
            YouTube
          </span>
        </div>

        <div style={{ flex: 1 }} />

        {/* Search bar placeholder */}
        <div
          style={{
            background: "#121212",
            border: "1px solid #303030",
            borderRadius: 20,
            padding: "8px 24px",
            fontSize: 15,
            color: "#606060",
            width: 340,
          }}
        >
          搜寻
        </div>
      </div>

      {/* Video cards */}
      {VIDEOS.map((video, i) => {
        const { x, y } = CARD-POSITIONS[i];
        const progress = cardProgressList[i];
        const viewProgress = viewProgressList[i];

        const scale = interpolate(progress, [0, 1], [0.88, 1], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(progress, [0, 0.35], [0, 1], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: CARD-W,
              transform: `scale(${scale})`,
              opacity,
              transformOrigin: "center top",
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: CARD-W,
                height: THUMB-H,
                borderRadius: 10,
                background: video.gradient,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle grid overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px)",
                }}
              />

              {/* Play button overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.65)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "18px solid #ffffff",
                    marginLeft: 4,
                  }}
                />
              </div>

              {/* Duration badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  background: "rgba(0,0,0,0.8)",
                  borderRadius: 4,
                  padding: "3px 7px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {video.duration}
              </div>
            </div>

            {/* Card info */}
            <div
              style={{
                display: "flex",
                gap: 12,
                paddingTop: 12,
              }}
            >
              {/* Channel avatar */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: CHANNEL-COLORS[i],
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#ffffff",
                  marginTop: 2,
                }}
              >
                {CHANNEL-INITIALS[i]}
              </div>

              {/* Title + channel + meta */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.4,
                    marginBottom: 5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {video.title}
                </div>
                <div style={{ fontSize: 13, color: "#aaaaaa", marginBottom: 2 }}>
                  {video.channel}
                </div>
                <div style={{ fontSize: 13, color: "#aaaaaa" }}>
                  {formatViewCount(video.viewsNum, viewProgress)} 次观看 · {video.time}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
