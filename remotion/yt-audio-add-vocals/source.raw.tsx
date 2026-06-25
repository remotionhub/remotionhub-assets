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
  accentSecondary: "#00D4AA",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
};

const TRACKS = [
  { label: "Piano",  color: "#4DA3FF", waveformSeed: 1, appearFrame: 0   },
  { label: "Guitar", color: "#FF6B6B", waveformSeed: 2, appearFrame: 30  },
  { label: "Drum",   color: "#FFD93D", waveformSeed: 3, appearFrame: 60  },
  { label: "Vocals", color: "#00D4AA", waveformSeed: 5, appearFrame: 120 },
];

function generateWaveformPath(seed: number, width: number, height: number, frame: number, segments: number = 60): string {
  const points: string[] = [];
  const midY = height / 2;
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const phase = (frame * 0.08) + (i * 0.3) + seed * 17;
    const amp1 = Math.sin(phase) * (midY * 0.6);
    const amp2 = Math.sin(phase * 1.7 + seed) * (midY * 0.3);
    const amp3 = Math.sin(phase * 3.1 + seed * 2.3) * (midY * 0.15);
    const y = midY + amp1 + amp2 + amp3;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
}

const MicrophoneIcon: React.FC<{ size?: number; color?: string; opacity?: number }> = ({
  size = 48, color = colors.accentSecondary, opacity = 1,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" style={{ opacity }}>
    <rect x="16" y="6" width="16" height="24" rx="8" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M10 28 Q10 40 24 40 Q38 40 38 28" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <line x1="24" y1="40" x2="24" y2="46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="17" y1="46" x2="31" y2="46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Scene23-AddVocals: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const trackAreaX = 280;
  const trackAreaW = 1360;
  const trackH = 80;
  const trackGap = 24;
  const startY = 260;

  const mergeStart = 180;
  const mergeProgress = interpolate(frame, [mergeStart, mergeStart + 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const glowOpacity = interpolate(frame, [mergeStart + 20, mergeStart + 50], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background, opacity: fadeOut }}>
      <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          <text x={960} y={160} fontSize="36" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.text} textAnchor="middle" letterSpacing="2" opacity={interpolate(frame, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
            為樂曲加入人聲
          </text>

          {TRACKS.map((track, index) => {
            const y = startY + index * (trackH + trackGap);
            const slideIn = spring({ frame: frame - track.appearFrame, fps, config: { damping: 14, mass: 1, stiffness: 120 } });
            const trackOpacity = interpolate(frame, [track.appearFrame, track.appearFrame + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const slideX = interpolate(slideIn, [0, 1], [-200, 0]);
            const isVocal = track.label === "Vocals";

            const mergeY = mergeProgress > 0
              ? interpolate(mergeProgress, [0, 1], [y, startY + 1.5 * (trackH + trackGap)])
              : y;

            return (
              <g key={track.label} transform={`translate(${slideX}, 0)`} opacity={trackOpacity}>
                <rect x={trackAreaX - 20} y={mergeY - 5} width={trackAreaW + 40} height={trackH + 10} rx="12" fill={colors.cardBg} stroke={`${track.color}33`} strokeWidth="1" />

                {isVocal && (
                  <foreignObject x={trackAreaX - 80} y={mergeY + 12} width={60} height={60}>
                    <MicrophoneIcon size={48} color={track.color} opacity={trackOpacity} />
                  </foreignObject>
                )}

                <text x={trackAreaX + 10} y={mergeY + trackH / 2 + 6} fontSize="20" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="600" fill={track.color}>
                  {track.label}
                </text>

                <clipPath id={`waveClip-${index}`}>
                  <rect x={trackAreaX + 120} y={mergeY} width={trackAreaW - 140} height={trackH} />
                </clipPath>
                <g clipPath={`url(#waveClip-${index})`}>
                  <path
                    d={generateWaveformPath(track.waveformSeed, trackAreaW - 140, trackH, frame)}
                    stroke={track.color}
                    strokeWidth="2.5"
                    fill="none"
                    transform={`translate(${trackAreaX + 120}, ${mergeY})`}
                    opacity={0.9}
                  />
                </g>
              </g>
            );
          })}

          {glowOpacity > 0 && (
            <rect x={trackAreaX - 30} y={startY - 20} width={trackAreaW + 60} height={TRACKS.length * (trackH + trackGap) + 40} rx="20" fill="none" stroke={colors.accent} strokeWidth="2" opacity={glowOpacity} filter="url(#mergeGlow)" />
          )}

          <defs>
            <filter id="mergeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const ADD_VOCALS_DURATION_FRAMES = 240;
