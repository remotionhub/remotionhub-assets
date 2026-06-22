import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

interface EnergyRayProps {
  index: number;
  frame: number;
  width: number;
  height: number;
  color: string;
  rayCount: number;
  phaseFrames: number;
}

const EnergyRay: React.FC<EnergyRayProps> = ({
  index,
  frame,
  width,
  height,
  color,
  rayCount,
  phaseFrames,
}) => {
  const cx = width / 2;
  const cy = height / 2;

  const corners = [
    { x: 0, y: 0 },
    { x: width, y: 0 },
    { x: width, y: height },
    { x: 0, y: height },
  ];
  const cornerIdx = index % 4;
  const corner = corners[cornerIdx];

  const spread = ((index % Math.max(1, Math.floor(rayCount / 4))) - (rayCount / 8 - 0.5)) * 40;
  const dx = cx - corner.x;
  const dy = cy - corner.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const perpX = -dy / len;
  const perpY = dx / len;

  const x1 = corner.x + perpX * spread;
  const y1 = corner.y + perpY * spread;
  const x2 = cx + perpX * spread * 0.1;
  const y2 = cy + perpY * spread * 0.1;

  const fadeOut = interpolate(frame, [12, phaseFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * fadeOut * (0.5 + ((index * 0.3) % 0.5));

  const strokeW = 2 + (index % 3) * 1.5;
  const rayProgress = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const rx2 = x1 + (x2 - x1) * rayProgress;
  const ry2 = y1 + (y2 - y1) * rayProgress;

  return (
    <line
      x1={x1}
      y1={y1}
      x2={rx2}
      y2={ry2}
      stroke={color}
      strokeWidth={strokeW}
      opacity={opacity}
      style={{ filter: `blur(${strokeW * 0.5}px)` }}
    />
  );
};

interface ShockwaveRingProps {
  frame: number;
  delay: number;
  color: string;
  cx: number;
  cy: number;
}

const ShockwaveRing: React.FC<ShockwaveRingProps> = ({ frame, delay, color, cx, cy }) => {
  const f = Math.max(0, frame - delay);
  const scale = interpolate(f, [0, 20], [0.1, 2.5], { extrapolateRight: "clamp" });
  const opacity = interpolate(f, [0, 4, 20], [0, 0.9, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <circle
      cx={cx}
      cy={cy}
      r={160 * scale}
      fill="none"
      stroke={color}
      strokeWidth={4}
      opacity={opacity}
      style={{ filter: `blur(${2 * (1 - scale / 2.5)}px)` }}
    />
  );
};

export interface CountdownBlastProps {
  phaseFrames?: number;
  phases?: string[];
  rayCount?: number;
  phaseColors?: string[];
  bgColors?: string[];
}

export const countdownBlastDefaultProps: CountdownBlastProps = {
  phaseFrames: 28,
  phases: ["5", "4", "3", "2", "1", "GO!"],
  rayCount: 12,
  phaseColors: ["#00e5ff", "#00cfb4", "#7fff00", "#ffcc00", "#ff6600", "#ff2020"],
  bgColors: ["#00060f", "#001208", "#040f00", "#0f0a00", "#0f0400", "#0f0000"],
};

export const CountdownBlast: React.FC<CountdownBlastProps> = ({
  phaseFrames = 28,
  phases = ["5", "4", "3", "2", "1", "GO!"],
  rayCount = 12,
  phaseColors = ["#00e5ff", "#00cfb4", "#7fff00", "#ffcc00", "#ff6600", "#ff2020"],
  bgColors = ["#00060f", "#001208", "#040f00", "#0f0a00", "#0f0400", "#0f0000"],
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const cx = width / 2;
  const cy = height / 2;

  const totalPhases = phases.length;
  const phase = Math.min(totalPhases - 1, Math.floor(frame / phaseFrames));
  const phaseFrame = frame - phase * phaseFrames;

  const currentLabel = phases[phase];
  const color = phaseColors[phase % phaseColors.length];
  const bgColor = bgColors[phase % bgColors.length];
  const isGo = phase === totalPhases - 1;

  const impactSpring = spring({
    frame: phaseFrame,
    fps,
    config: { damping: 6, stiffness: 400, mass: 0.5 },
  });
  const impactScale = interpolate(impactSpring, [0, 1], [3.0, 1], {
    extrapolateRight: "clamp",
  });

  const exitScale = phaseFrame > phaseFrames - 8
    ? interpolate(phaseFrame, [phaseFrames - 8, phaseFrames], [1, 0.3], {
        extrapolateRight: "clamp",
      })
    : 1;

  const opacity = interpolate(
    phaseFrame,
    [0, 2, phaseFrames - 6, phaseFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const goExpand = isGo
    ? interpolate(phaseFrame, [0, 20], [0, 1], { extrapolateRight: "clamp" })
    : 0;

  const fontSize = isGo
    ? interpolate(goExpand, [0, 1], [120, 320])
    : 300;

  const bgPulse = interpolate(
    Math.sin((phaseFrame / phaseFrames) * Math.PI),
    [-1, 1],
    [0, 0.15]
  );

  return (
    <AbsoluteFill
      style={{
        background: bgColor,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, ${color}${Math.round(bgPulse * 255).toString(16).padStart(2, "0")} 0%, transparent 65%)`,
          zIndex: 0,
        }}
      />

      <svg
        style={{ position: "absolute", inset: 0, zIndex: 2 }}
        width={width}
        height={height}
      >
        {Array.from({ length: rayCount }).map((_, i) => (
          <EnergyRay
            key={i}
            index={i}
            frame={phaseFrame}
            width={width}
            height={height}
            color={color}
            rayCount={rayCount}
            phaseFrames={phaseFrames}
          />
        ))}

        <ShockwaveRing frame={phaseFrame} delay={0} color={color} cx={cx} cy={cy} />
        <ShockwaveRing frame={phaseFrame} delay={5} color={color} cx={cx} cy={cy} />
        <ShockwaveRing frame={phaseFrame} delay={10} color={color} cx={cx} cy={cy} />

        {isGo && Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * 2 * Math.PI;
          const rayLen = interpolate(phaseFrame, [0, 15], [0, 700], { extrapolateRight: "clamp" });
          const rayOpacity = interpolate(phaseFrame, [0, 5, 25], [0, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <line
              key={`go${i}`}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(angle) * rayLen}
              y2={cy + Math.sin(angle) * rayLen}
              stroke={color}
              strokeWidth={3 + (i % 3)}
              opacity={rayOpacity}
              style={{ filter: "blur(2px)" }}
            />
          );
        })}
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          fontSize,
          fontWeight: 900,
          color: "#ffffff",
          fontFamily: "sans-serif",
          textAlign: "center",
          lineHeight: 1,
          opacity,
          transform: `scale(${impactScale * exitScale})`,
          textShadow: `0 0 20px ${color}, 0 0 60px ${color}, 0 0 120px ${color}80, 0 2px 0 rgba(0,0,0,0.5)`,
        }}
      >
        {currentLabel}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 160,
          right: 160,
          height: 6,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 3,
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(phase / (totalPhases - 1)) * 100}%`,
            background: color,
            boxShadow: `0 0 10px ${color}`,
            borderRadius: 3,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 110,
          display: "flex",
          gap: 16,
          zIndex: 10,
        }}
      >
        {phases.slice(0, -1).map((_, i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: i <= phase ? phaseColors[i % phaseColors.length] : "rgba(255,255,255,0.15)",
              boxShadow: i <= phase ? `0 0 8px ${phaseColors[i % phaseColors.length]}` : "none",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
