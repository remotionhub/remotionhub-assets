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
  danger: "#FF4444",
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
};

const TRACKS = [
  { label: "Piano",  color: "#FFFFFF",  waveformSeed: 1, appearFrame: 0   },
  { label: "Guitar", color: "#FF6B6B",  waveformSeed: 2, appearFrame: 130 },
  { label: "Drums",  color: "#FFD93D",  waveformSeed: 3, appearFrame: 150 },
  { label: "Bass",   color: "#4DA3FF",  waveformSeed: 4, appearFrame: 170 },
];

function generateWaveformPath(seed: number, width: number, height: number, frame: number): string {
  const points: string[] = [];
  const midY = height / 2;
  const segments = 50;
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const phase = (frame * 0.1) + (i * 0.35) + seed * 19;
    const amp = Math.sin(phase) * (midY * 0.5) + Math.sin(phase * 2.1 + seed) * (midY * 0.25) + Math.sin(phase * 3.7 + seed * 3) * (midY * 0.1);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${(midY + amp).toFixed(1)}`);
  }
  return points.join(" ");
}

const Speedometer: React.FC<{ needleAngle: number; opacity: number; speedText: string }> = ({
  needleAngle, opacity, speedText,
}) => {
  const cx = 0, cy = 0, r = 90;
  return (
    <g opacity={opacity}>
      <path d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy}`} stroke="rgba(255,255,255,0.15)" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy}`} stroke={colors.danger} strokeWidth="8" fill="none" strokeLinecap="round"
        strokeDasharray={Math.PI * r}
        strokeDashoffset={Math.PI * r * (1 - Math.max(0, (needleAngle + 120) / 110))}
      />
      {[-120, -90, -60, -30, 0, -10].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return <line key={i} x1={cx + Math.cos(rad) * 72} y1={cy + Math.sin(rad) * 72} x2={cx + Math.cos(rad) * 82} y2={cy + Math.sin(rad) * 82} stroke={colors.dimmed} strokeWidth="2" />;
      })}
      <line x1={cx} y1={cy} x2={cx + Math.cos((needleAngle * Math.PI) / 180) * 65} y2={cy + Math.sin((needleAngle * Math.PI) / 180) * 65} stroke={colors.text} strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={6} fill={colors.text} />
      <text x={cx} y={cy + 40} fontSize="28" fontFamily="'Inter', sans-serif" fontWeight="800" fill={colors.danger} textAnchor="middle">
        {speedText}
      </text>
    </g>
  );
};

export const YtAudioRockRemix: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const trackAreaX = 200;
  const trackAreaW = 900;
  const trackH = 70;
  const trackGap = 20;
  const startY = 300;

  const needleAngle = interpolate(frame, [75, 110], [-120, -10], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const speedometerOpacity = interpolate(frame, [65, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const badgeSpring = spring({ frame: frame - 205, fps, config: { damping: 10, mass: 0.8, stiffness: 180 } });
  const badgeScale = interpolate(badgeSpring, [0, 1], [0, 1]);
  const badgeOpacity = interpolate(frame, [205, 215], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background, opacity: fadeOut }}>
      <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          {/* Track list */}
          {TRACKS.map((track, index) => {
            const y = startY + index * (trackH + trackGap);
            const slideIn = spring({ frame: frame - track.appearFrame, fps, config: { damping: 14, mass: 1 } });
            const trackOpacity = interpolate(frame, [track.appearFrame, track.appearFrame + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const slideX = interpolate(slideIn, [0, 1], [-300, 0]);

            return (
              <g key={track.label} transform={`translate(${slideX}, 0)`} opacity={trackOpacity}>
                <rect x={trackAreaX - 15} y={y - 5} width={trackAreaW + 30} height={trackH + 10} rx="10" fill={colors.cardBg} stroke={`${track.color}33`} strokeWidth="1" />
                <circle cx={trackAreaX + 20} cy={y + trackH / 2} r={8} fill={track.color} opacity={0.8} />
                <text x={trackAreaX + 45} y={y + trackH / 2 + 6} fontSize="18" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="600" fill={track.color}>
                  {track.label}
                </text>
                <clipPath id={`rockWaveClip-${index}`}>
                  <rect x={trackAreaX + 140} y={y} width={trackAreaW - 160} height={trackH} />
                </clipPath>
                <g clipPath={`url(#rockWaveClip-${index})`}>
                  <path d={generateWaveformPath(track.waveformSeed, trackAreaW - 160, trackH, frame)} stroke={track.color} strokeWidth="2" fill="none" transform={`translate(${trackAreaX + 140}, ${y})`} opacity={0.8} />
                </g>
              </g>
            );
          })}

          {/* Speedometer */}
          <g transform="translate(1500, 500)">
            <Speedometer needleAngle={needleAngle} opacity={speedometerOpacity} speedText="1.5x" />
          </g>

          {/* ROCK badge */}
          <g opacity={badgeOpacity} transform={`translate(960, 160) scale(${badgeScale})`}>
            <rect x={-120} y={-40} width={240} height={80} rx="12" fill={`${colors.danger}22`} stroke={colors.danger} strokeWidth="2" />
            <text x={0} y={12} fontSize="52" fontFamily="'Inter', sans-serif" fontWeight="900" fill={colors.danger} textAnchor="middle" letterSpacing="10">
              ROCK
            </text>
          </g>
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const ROCK_REMIX_DURATION_FRAMES = 300;

export const ytAudioRockRemixDefaultProps = {}
