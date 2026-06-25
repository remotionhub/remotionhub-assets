import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

const colors = {
  background: "#0B0F17",
  text: "#FFFFFF",
  accent: "#4DA3FF",
  selected: "#FFD93D",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.08)",
  cardBorder: "rgba(255, 255, 255, 0.15)",
};

const CARD_COUNT = 12;
const COLS = 4;
const CARD_SIZE = 105;
const CARD_START_FRAME = 60;
const CARD_INTERVAL = 5;
const SELECTED_INDEX = 6;

export const Scene19-FastResults: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Phase 1: Clock (frames 0-55)
  const clockHandAngle = interpolate(frame, [10, 55], [0, 720], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clockOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clockScale = spring({ frame, fps, config: { damping: 12, mass: 0.8 } });
  const timerTextOpacity = interpolate(frame, [35, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Phase 2: Cards (frames 60-115)
  const rows = Math.ceil(CARD_COUNT / COLS);
  const gridW = COLS * (CARD_SIZE + 16) - 16;
  const gridH = rows * (CARD_SIZE + 16) - 16;
  const gridX = (1920 - gridW) / 2;
  const gridY = 350;

  // Phase 3: AI face (frames 120-160)
  const aiSpring = spring({ frame: frame - 120, fps, config: { damping: 14, mass: 1 } });
  const aiOpacity = interpolate(frame, [120, 135], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const aiScale = interpolate(aiSpring, [0, 1], [0.5, 1]);

  // Phase 4: Selection (frames 165-210)
  const selectProgress = interpolate(frame, [165, 185], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const selectGlow = frame > 185 ? 4 + 4 * Math.sin(((frame - 185) / 20) * Math.PI * 2) : 0;

  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background, opacity: fadeOut }}>
      <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          {/* Phase 1: Clock */}
          <g opacity={clockOpacity} transform={`translate(960, 200) scale(${clockScale})`}>
            <circle cx={0} cy={0} r={60} stroke={colors.accent} strokeWidth="3" fill="none" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
              const a = (i * 30 * Math.PI) / 180;
              return <line key={i} x1={Math.sin(a) * 48} y1={-Math.cos(a) * 48} x2={Math.sin(a) * 55} y2={-Math.cos(a) * 55} stroke={colors.dimmed} strokeWidth="2" />;
            })}
            <line x1={0} y1={0} x2={0} y2={-35} stroke={colors.text} strokeWidth="3" strokeLinecap="round" transform={`rotate(${clockHandAngle})`} />
            <line x1={0} y1={0} x2={0} y2={-45} stroke={colors.accent} strokeWidth="2" strokeLinecap="round" transform={`rotate(${clockHandAngle * 0.08})`} />
            <circle cx={0} cy={0} r={4} fill={colors.text} />
          </g>

          <g opacity={timerTextOpacity}>
            <text x={960} y={300} fontSize="36" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.accent} textAnchor="middle">
              {"< 5 "}<tspan fill={colors.dimmed} fontSize="28">min</tspan>
            </text>
          </g>

          {/* Phase 2: Version cards */}
          {Array.from({ length: CARD_COUNT }).map((_, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const cardAppear = CARD_START_FRAME + i * CARD_INTERVAL;
            const cardSpring = spring({ frame: frame - cardAppear, fps, config: { damping: 12, mass: 0.6 } });
            const cardScale = interpolate(cardSpring, [0, 1], [0, 1]);
            const cardOpacity = interpolate(frame, [cardAppear, cardAppear + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

            const x = gridX + col * (CARD_SIZE + 16);
            const y = gridY + row * (CARD_SIZE + 16);

            const isSelected = i === SELECTED_INDEX;
            const dimOthers = selectProgress > 0 && !isSelected ? 1 - selectProgress * 0.6 : 1;
            const selectedBorder = isSelected ? interpolate(selectProgress, [0, 1], [0, 3]) : 0;
            const selectedColor = isSelected ? colors.selected : colors.cardBorder;

            return (
              <g key={i} opacity={cardOpacity * dimOthers} transform={`translate(${x + CARD_SIZE / 2}, ${y + CARD_SIZE / 2}) scale(${cardScale})`}>
                <rect x={-CARD_SIZE / 2} y={-CARD_SIZE / 2} width={CARD_SIZE} height={CARD_SIZE} rx="12" fill={colors.cardBg} stroke={selectedColor} strokeWidth={1.5 + selectedBorder}
                  style={isSelected && selectGlow > 0 ? { filter: `drop-shadow(0 0 ${selectGlow}px ${colors.selected})` } : {}}
                />
                <text x={0} y={6} fontSize="22" fontFamily="'Inter', sans-serif" fontWeight="700" fill={isSelected && selectProgress > 0 ? colors.selected : colors.dimmed} textAnchor="middle">
                  V{i + 1}
                </text>
              </g>
            );
          })}

          {/* Phase 3: AI face */}
          <g opacity={aiOpacity} transform={`translate(960, 820) scale(${aiScale})`}>
            <circle cx={0} cy={0} r={40} stroke={colors.accent} strokeWidth="2.5" fill={`${colors.accent}15`} />
            <circle cx={-14} cy={-8} r={5} fill={colors.accent} />
            <circle cx={14} cy={-8} r={5} fill={colors.accent} />
            <path d="M-16 10 Q0 26 16 10" stroke={colors.accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <text x={0} y={75} fontSize="24" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="600" fill={colors.dimmed} textAnchor="middle">
              AI 不會生氣
            </text>
          </g>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const FAST_RESULTS_DURATION_FRAMES = 240;
