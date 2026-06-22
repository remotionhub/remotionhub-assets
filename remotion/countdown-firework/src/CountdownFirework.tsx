import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";

interface ParticleProps {
  index: number;
  frame: number;
  origin: { x: number; y: number };
  particleColors: string[];
  particleCount: number;
}

const Particle: React.FC<ParticleProps> = ({ index, frame, origin, particleColors, particleCount }) => {
  const seed = (index * 137.508) % 1;
  const angle = (index / particleCount) * 2 * Math.PI + seed * 0.5;
  const speed = 180 + seed * 220;
  const color = particleColors[index % particleColors.length];
  const size = 8 + seed * 14;

  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed - 200;
  const gravity = 400;

  const t = frame / 30;
  const x = origin.x + vx * t;
  const y = origin.y + vy * t + 0.5 * gravity * t * t;

  const opacity = interpolate(frame, [0, 10, 40], [0, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 5, 40], [0, 1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <circle
      cx={x}
      cy={y}
      r={size * scale}
      fill={color}
      opacity={opacity}
      style={{ filter: `blur(${1 - scale}px)` }}
    />
  );
};

export interface CountdownFireworkProps {
  phaseFrames?: number;
  particleCount?: number;
  particleColors?: string[];
  numbers?: string[];
  bgColors?: string[];
  digitColors?: string[];
}

export const countdownFireworkDefaultProps: CountdownFireworkProps = {
  phaseFrames: 40,
  particleCount: 40,
  particleColors: [
    "#ff4d4d", "#ff9500", "#ffdd00", "#44ff88",
    "#00cfff", "#a855f7", "#ff69b4", "#ffffff",
  ],
  numbers: ["3", "2", "1", "GO!"],
  bgColors: ["#0a0a1a", "#0a0a1a", "#0a0a1a", "#ff4d00"],
  digitColors: ["#ffdd00", "#ff9500", "#ff4d4d", "#ffffff"],
};

export const CountdownFirework: React.FC<CountdownFireworkProps> = ({
  phaseFrames = 40,
  particleCount = 40,
  particleColors = [
    "#ff4d4d", "#ff9500", "#ffdd00", "#44ff88",
    "#00cfff", "#a855f7", "#ff69b4", "#ffffff",
  ],
  numbers = ["3", "2", "1", "GO!"],
  bgColors = ["#0a0a1a", "#0a0a1a", "#0a0a1a", "#ff4d00"],
  digitColors = ["#ffdd00", "#ff9500", "#ff4d4d", "#ffffff"],
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const totalPhases = numbers.length;
  const phase = Math.min(totalPhases - 1, Math.floor(frame / phaseFrames));
  const phaseFrame = frame - phase * phaseFrames;

  const currentNum = numbers[phase];
  const currentColor = digitColors[phase % digitColors.length];
  const bgColor = bgColors[phase % bgColors.length];

  const scaleSpring = spring({
    frame: phaseFrame,
    fps,
    config: { damping: 8, stiffness: 300, mass: 0.6 },
  });
  const scaleIn = interpolate(scaleSpring, [0, 1], [2.5, 1], {
    extrapolateRight: "clamp",
  });

  const exitScale = phaseFrame > phaseFrames - 10
    ? interpolate(phaseFrame, [phaseFrames - 10, phaseFrames], [1, 0], {
        extrapolateRight: "clamp",
      })
    : 1;

  const finalScale = scaleIn * exitScale;

  const opacity = interpolate(
    phaseFrame,
    [0, 3, phaseFrames - 8, phaseFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const isGoPhase = phase === totalPhases - 1;
  const fireworkFrame = isGoPhase ? phaseFrame : 0;

  const flashOpacity = isGoPhase
    ? interpolate(phaseFrame, [0, 5, 15], [0.8, 0.4, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 0;

  const shockwaves = [0, 8, 16];

  return (
    <AbsoluteFill
      style={{
        background: bgColor,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {isGoPhase && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `rgba(255, 200, 0, ${flashOpacity})`,
            zIndex: 1,
          }}
        />
      )}

      {shockwaves.map((delay) => {
        const swFrame = Math.max(0, phaseFrame - delay);
        const swScale = interpolate(swFrame, [0, 30], [0, 3], {
          extrapolateRight: "clamp",
        });
        const swOpacity = interpolate(swFrame, [0, 5, 30], [0, 0.8, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={delay}
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: `4px solid ${currentColor}`,
              transform: `scale(${swScale})`,
              opacity: swOpacity,
              zIndex: 2,
            }}
          />
        );
      })}

      {isGoPhase && (
        <svg
          style={{ position: "absolute", inset: 0, zIndex: 3 }}
          width={width}
          height={height}
        >
          {Array.from({ length: particleCount }).map((_, i) => (
            <Particle
              key={i}
              index={i}
              frame={fireworkFrame}
              origin={{ x: width / 2, y: height / 2 }}
              particleColors={particleColors}
              particleCount={particleCount}
            />
          ))}
          {Array.from({ length: particleCount }).map((_, i) => (
            <Particle
              key={`b${i}`}
              index={i + particleCount}
              frame={Math.max(0, fireworkFrame - 8)}
              origin={{ x: width / 2 - 100, y: height / 2 - 80 }}
              particleColors={particleColors}
              particleCount={particleCount}
            />
          ))}
          {Array.from({ length: particleCount }).map((_, i) => (
            <Particle
              key={`c${i}`}
              index={i + particleCount * 2}
              frame={Math.max(0, fireworkFrame - 16)}
              origin={{ x: width / 2 + 100, y: height / 2 - 80 }}
              particleColors={particleColors}
              particleCount={particleCount}
            />
          ))}
        </svg>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          fontSize: isGoPhase ? 200 : 280,
          fontWeight: 900,
          color: currentColor,
          fontFamily: "sans-serif",
          textAlign: "center",
          opacity,
          transform: `scale(${finalScale})`,
          textShadow: `0 0 60px ${currentColor}, 0 0 120px ${currentColor}80`,
          lineHeight: 1,
        }}
      >
        {currentNum}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          display: "flex",
          gap: 20,
          zIndex: 10,
        }}
      >
        {numbers.slice(0, -1).map((_, i) => (
          <div
            key={i}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: i < phase ? digitColors[i % digitColors.length] : "rgba(255,255,255,0.2)",
              boxShadow: i < phase ? `0 0 10px ${digitColors[i % digitColors.length]}` : "none",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
