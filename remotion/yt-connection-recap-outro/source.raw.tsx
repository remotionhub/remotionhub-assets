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
  dimmed: "rgba(255, 255, 255, 0.6)",
  cardBg: "rgba(255, 255, 255, 0.05)",
};

const CloudIcon: React.FC<{ size?: number; color?: string }> = ({ size = 40, color = "#FF9F43" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M10 28 Q4 28 4 22 Q4 16 10 16 Q12 10 18 10 Q24 8 28 14 Q34 14 36 18 Q38 22 34 26 Q32 28 28 28 Z" stroke={color} strokeWidth="2.5" fill={`${color}20`} strokeLinejoin="round" />
  </svg>
);

const LineBrowserIcon: React.FC<{ size?: number; color?: string }> = ({ size = 40, color = "#00D4AA" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="4" y="6" width="32" height="28" rx="4" stroke={color} strokeWidth="2.5" fill={`${color}15`} />
    <line x1="4" y1="14" x2="36" y2="14" stroke={color} strokeWidth="2" />
    <circle cx="10" cy="10" r="2" fill={color} />
    <circle cx="16" cy="10" r="2" fill={color} />
    <circle cx="22" cy="10" r="2" fill={color} />
  </svg>
);

const PlugIcon: React.FC<{ size?: number; color?: string }> = ({ size = 40, color = "#4DA3FF" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <line x1="14" y1="4" x2="14" y2="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="26" y1="4" x2="26" y2="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <rect x="8" y="14" width="24" height="12" rx="4" stroke={color} strokeWidth="2.5" fill={`${color}15`} />
    <line x1="20" y1="26" x2="20" y2="36" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const recapCards = [
  { Icon: CloudIcon,       title: "AWS VPS",        subtitle: "雲端伺服器",      color: "#FF9F43" },
  { Icon: LineBrowserIcon,  title: "LINE + WebUI",   subtitle: "前端介面",        color: "#00D4AA" },
  { Icon: PlugIcon,         title: "MCP 上線",       subtitle: "GitHub + Vercel", color: "#4DA3FF" },
];

const channelPills = ["Discord", "Slack", "Email"];

export const Scene16-RecapOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const cardStartFrame = 20;
  const cardInterval = 40;
  const pillsStart = 210;
  const ctaStart = 340;

  const fadeOut = interpolate(frame, [durationInFrames - 25, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.background, opacity: fadeOut }}>
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
          {/* Recap Cards */}
          {recapCards.map((card, index) => {
            const appear = cardStartFrame + index * cardInterval;
            const cardSpring = spring({ frame: frame - appear, fps, config: { damping: 14, mass: 1 } });
            const cardOpacity = interpolate(frame, [appear, appear + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const slideY = interpolate(cardSpring, [0, 1], [80, 0]);

            const cardW = 400;
            const cardH = 160;
            const gap = 40;
            const totalW = recapCards.length * cardW + (recapCards.length - 1) * gap;
            const startX = (1920 - totalW) / 2;
            const x = startX + index * (cardW + gap);
            const y = 280;

            return (
              <g key={card.title} opacity={cardOpacity} transform={`translate(0, ${slideY})`}>
                <rect x={x} y={y} width={cardW} height={cardH} rx="16" fill={colors.cardBg} stroke={`${card.color}55`} strokeWidth="1.5" />
                <line x1={x} y1={y} x2={x} y2={y + cardH} stroke={card.color} strokeWidth="4" strokeLinecap="round" />

                <foreignObject x={x + 24} y={y + 30} width={50} height={50}>
                  <card.Icon size={40} color={card.color} />
                </foreignObject>

                <text x={x + 85} y={y + 60} fontSize="24" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.text}>
                  {card.title}
                </text>
                <text x={x + 85} y={y + 90} fontSize="16" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="400" fill={colors.dimmed}>
                  {card.subtitle}
                </text>
              </g>
            );
          })}

          {/* Channel section */}
          <g opacity={interpolate(frame, [pillsStart, pillsStart + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
            <text x={960} y={560} fontSize="40" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="800" fill={colors.text} textAnchor="middle">
              土撥鼠日誌
            </text>

            {/* Channel pills */}
            {channelPills.map((pill, i) => {
              const pillAppear = pillsStart + 30 + i * 15;
              const pillSpring = spring({ frame: frame - pillAppear, fps, config: { damping: 12, mass: 0.6 } });
              const pillScale = interpolate(pillSpring, [0, 1], [0, 1]);
              const pillOpacity = interpolate(frame, [pillAppear, pillAppear + 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

              const pillW = 140;
              const pillGap = 24;
              const totalPillW = channelPills.length * pillW + (channelPills.length - 1) * pillGap;
              const px = (1920 - totalPillW) / 2 + i * (pillW + pillGap) + pillW / 2;

              return (
                <g key={pill} opacity={pillOpacity} transform={`translate(${px}, 620) scale(${pillScale})`}>
                  <rect x={-pillW / 2} y={-18} width={pillW} height={36} rx="18" fill={`${colors.accent}22`} stroke={colors.accent} strokeWidth="1.5" />
                  <text x={0} y={5} fontSize="16" fontFamily="'Inter', sans-serif" fontWeight="600" fill={colors.accent} textAnchor="middle">
                    {pill}
                  </text>
                </g>
              );
            })}

            {/* GitHub link */}
            <text x={960} y={700} fontSize="16" fontFamily="'Inter', sans-serif" fontWeight="400" fill={colors.dimmed} textAnchor="middle" opacity={interpolate(frame, [pillsStart + 80, pillsStart + 95], [0, 0.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}>
              github.com/woodlandcreature/...
            </text>
          </g>

          {/* CTA Subscribe button */}
          {(() => {
            const ctaSpring = spring({ frame: frame - ctaStart, fps, config: { damping: 12, mass: 0.8 } });
            const ctaScale = interpolate(ctaSpring, [0, 1], [0.6, 1]);
            const ctaOpacity = interpolate(frame, [ctaStart, ctaStart + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const ctaGlow = frame > ctaStart + 30 ? 4 + 3 * Math.sin(((frame - ctaStart - 30) / 25) * Math.PI * 2) : 0;

            return (
              <g opacity={ctaOpacity} transform={`translate(960, 820) scale(${ctaScale})`}>
                <rect x={-100} y={-28} width={200} height={56} rx="28" fill={colors.accent} style={ctaGlow > 0 ? { filter: `drop-shadow(0 0 ${ctaGlow}px ${colors.accent})` } : {}} />
                <text x={0} y={7} fontSize="20" fontFamily="'Inter', 'Noto Sans TC', sans-serif" fontWeight="700" fill={colors.background} textAnchor="middle">
                  訂閱頻道
                </text>
              </g>
            );
          })()}
        </svg>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const RECAP_OUTRO_DURATION_FRAMES = 480;
