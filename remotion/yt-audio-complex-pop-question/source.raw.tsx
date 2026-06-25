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
  success: "#00D4AA",
  warning: "#FFB547",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
};

function generateWaveform(seed: number, width: number, height: number, frame: number, layers: number = 1): string[] {
  const paths: string[] = [];
  for (let l = 0; l < layers; l++) {
    const points: string[] = [];
    const midY = height / 2;
    const segments = 40;
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const phase = (frame * 0.06) + (i * 0.25) + seed * 13 + l * 5;
      const amp = Math.sin(phase) * (midY * (0.4 + l * 0.15)) + Math.sin(phase * 2.3 + l) * (midY * 0.2);
      points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${(midY + amp).toFixed(1)}`);
    }
    paths.push(points.join(" "));
  }
  return paths;
}

export const Scene20-ComplexPopQuestion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const leftSlide = spring({ frame: frame - 10, fps, config: { damping: 14, mass: 1.2 } });
  const leftX = interpolate(leftSlide, [0, 1], [-500, 0]);
  const leftOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const middleOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const rightSlide = spring({ frame: frame - 90, fps, config: { damping: 14, mass: 1.2 } });
  const rightX = interpolate(rightSlide, [0, 1], [500, 0]);
  const rightOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const questionScale = frame > 130
    ? 1 + 0.08 * Math.sin(((frame - 130) / 20) * Math.PI * 2)
    : interpolate(frame, [120, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const questionOpacity = interpolate(frame, [120, 135], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const questionGlow = frame > 140 ? 8 + 6 * Math.sin(((frame - 140) / 25) * Math.PI * 2) : 0;

  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const simpleWave = generateWaveform(1, 300, 80, frame, 1);
  const complexWaves = generateWaveform(2, 300, 80, frame, 3);
  const waveColors = ["#FF6B6B", "#FFB547", "#4DA3FF"];

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background, opacity: fadeOut }}>
      <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          {/* Left panel - simple music */}
          <g transform={`translate(${leftX}, 0)`} opacity={leftOpacity}>
            <rect x={120} y={300} width={520} height={400} rx="20" fill={colors.cardBg} stroke={`${colors.success}44`} strokeWidth="1.5" />

            <text x={380} y={380} fontSize="32" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.text} textAnchor="middle">
              簡單音樂
            </text>

            <rect x={290} y={400} width={180} height={36} rx="18" fill={`${colors.success}22`} stroke={colors.success} strokeWidth="1.5" />
            <text x={380} y={424} fontSize="18" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="600" fill={colors.success} textAnchor="middle">
              ✓ 可以改編
            </text>

            <g transform="translate(230, 470)">
              <path d={simpleWave[0]} stroke={colors.success} strokeWidth="2.5" fill="none" opacity={0.8} />
            </g>
          </g>

          {/* Middle transition */}
          <g opacity={middleOpacity}>
            <text x={960} y={520} fontSize="48" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="300" fill={colors.dimmed} textAnchor="middle" fontStyle="italic">
              那...
            </text>
          </g>

          {/* Right panel - complex music */}
          <g transform={`translate(${rightX}, 0)`} opacity={rightOpacity}>
            <rect x={1280} y={300} width={520} height={400} rx="20" fill={colors.cardBg} stroke={`${colors.warning}44`} strokeWidth="1.5" />

            <text x={1540} y={380} fontSize="32" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.text} textAnchor="middle">
              複雜流行音樂
            </text>

            <rect x={1440} y={400} width={200} height={36} rx="18" fill={`${colors.warning}22`} stroke={colors.warning} strokeWidth="1.5" />
            <text x={1540} y={424} fontSize="18" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="600" fill={colors.warning} textAnchor="middle">
              是否可行？
            </text>

            <g transform="translate(1390, 470)">
              {complexWaves.map((path, i) => (
                <path key={i} d={path} stroke={waveColors[i]} strokeWidth="2" fill="none" opacity={0.6} />
              ))}
            </g>
          </g>

          {/* Pulsing question mark */}
          <g opacity={questionOpacity} transform={`translate(960, 800)`}>
            <text x={0} y={0} fontSize="120" fontFamily="'Inter', sans-serif" fontWeight="900" fill={colors.warning} textAnchor="middle" dominantBaseline="central"
              style={{ filter: questionGlow > 0 ? `drop-shadow(0 0 ${questionGlow}px ${colors.warning})` : "none" }}
              transform={`scale(${questionScale})`}
            >
              ？
            </text>
          </g>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const COMPLEX_POP_QUESTION_DURATION_FRAMES = 240;
