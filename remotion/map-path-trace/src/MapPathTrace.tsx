import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import React from 'react'

export interface CityCoord {
  name: string
  lat: number
  lng: number
}

export interface MapPathTraceProps {
  title?: string
  subtitle?: string
  cities?: CityCoord[]
  traceColor?: string
  dotColor?: string
  distanceText?: string
  passCountText?: string
  speedFrameLimit?: number
}

// 投影函数
const GEO = { lngMin: 119.5, lngMax: 122.5, latMin: 21.7, latMax: 25.5 }
const MAP = { x: 200, y: 100, w: 500, h: 760 }

const project = (lat: number, lng: number) => ({
  x: MAP.x + ((lng - GEO.lngMin) / (GEO.lngMax - GEO.lngMin)) * MAP.w,
  y: MAP.y + ((GEO.latMax - lat) / (GEO.latMax - GEO.latMin)) * MAP.h,
})

// 台湾轮廓座标
const TAIWAN_OUTLINE: [number, number][] = [
  [25.3, 121.54],
  [25.13, 121.74],
  [25.0, 122.0],
  [24.87, 121.83],
  [24.72, 121.77],
  [24.6, 121.87],
  [23.98, 121.61],
  [23.55, 121.55],
  [23.09, 121.37],
  [22.75, 121.1],
  [22.3, 120.9],
  [21.9, 120.85],
  [22.17, 120.7],
  [22.38, 120.49],
  [22.62, 120.26],
  [23.05, 120.1],
  [23.42, 120.12],
  [23.71, 120.29],
  [23.96, 120.43],
  [24.2, 120.57],
  [24.56, 120.78],
  [24.85, 120.88],
  [25.0, 121.35],
  [25.17, 121.43],
  [25.3, 121.54],
]

const taiwanPath =
  TAIWAN_OUTLINE.map(([lat, lng], i) => {
    const p = project(lat, lng)
    return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
  }).join(' ') + ' Z'

export function MapPathTrace({
  title = '西部走廊路线',
  subtitle = '台北 → 高雄',
  cities = [],
  traceColor = '#38bdf8',
  dotColor = '#facc15',
  distanceText = '约 355 公里',
  passCountText = '5 个',
  speedFrameLimit = 110,
}: MapPathTraceProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const routeCities = cities.map((c) => ({
    ...c,
    ...project(c.lat, c.lng),
  }))

  // 创建 polyline 点字符串
  const polylinePoints = routeCities
    .map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`)
    .join(' ')

  // 估算路径总长度（相邻城市间距离之和）
  const totalPathLength = routeCities.reduce((total, c, i) => {
    if (i === 0) return total
    const prev = routeCities[i - 1]
    const dx = c.x - prev.x
    const dy = c.y - prev.y
    return total + Math.sqrt(dx * dx + dy * dy)
  }, 0)

  // 每个城市在路径上的累积距离比例
  const cityDistances = routeCities.map((c, i) => {
    if (i === 0) return 0
    let dist = 0
    for (let j = 1; j <= i; j++) {
      const dx = routeCities[j].x - routeCities[j - 1].x
      const dy = routeCities[j].y - routeCities[j - 1].y
      dist += Math.sqrt(dx * dx + dy * dy)
    }
    return dist / (totalPathLength || 1)
  })

  // 路径描绘进度（前 speedFrameLimit 帧）
  const pathProgress = interpolate(frame, [0, speedFrameLimit], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const dashOffset = totalPathLength * (1 - pathProgress)

  // 移动光点位置（沿路径插值）
  const dotProgress = interpolate(frame, [5, speedFrameLimit + 5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // 找到 dotProgress 在哪段城市间
  let dotX = routeCities[0]?.x ?? 0
  let dotY = routeCities[0]?.y ?? 0
  for (let i = 1; i < routeCities.length; i++) {
    const segStart = cityDistances[i - 1]
    const segEnd = cityDistances[i]
    if (dotProgress <= segEnd) {
      const t = (dotProgress - segStart) / ((segEnd - segStart) || 1)
      dotX =
        routeCities[i - 1].x + t * (routeCities[i].x - routeCities[i - 1].x)
      dotY =
        routeCities[i - 1].y + t * (routeCities[i].y - routeCities[i - 1].y)
      break
    }
    if (i === routeCities.length - 1) {
      dotX = routeCities[i].x
      dotY = routeCities[i].y
    }
  }

  // 城市标记弹入
  const cityProgress = (i: number) =>
    spring({
      frame: frame - i * 15,
      fps,
      config: { damping: 20, stiffness: 180 },
    })

  // 脉冲（终点）
  const pulseScale = interpolate(frame % 30, [0, 15, 30], [1, 1.8, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const pulseOpacity = interpolate(frame % 30, [0, 15, 30], [0.8, 0, 0.8], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const showPulse = frame > 120

  // 右侧城市列表：描绘到哪个城市就亮起哪行
  const cityLit = (i: number) => pathProgress >= cityDistances[i] - 0.02

  const firstCityName = routeCities[0]?.name ?? ''
  const lastCityName = routeCities[routeCities.length - 1]?.name ?? ''

  return (
    <AbsoluteFill
      style={{
        background: '#050d1a',
        fontFamily: 'sans-serif',
      }}
    >
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <pattern
            id="ptGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#0e1e30"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* 背景格线 */}
        <rect width="1920" height="1080" fill="url(#ptGrid)" opacity="0.6" />

        {/* 台湾轮廓 */}
        <path
          d={taiwanPath}
          fill="#0f2040"
          stroke="#1e3a5f"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* 路径底层（虚线导引） */}
        {polylinePoints && (
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="3"
            strokeDasharray="10 6"
          />
        )}

        {/* 描绘路径 */}
        {polylinePoints && (
          <polyline
            points={polylinePoints}
            fill="none"
            stroke={traceColor}
            strokeWidth="4"
            strokeDasharray={`${totalPathLength}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: `drop-shadow(0 0 7px ${traceColor})` }}
          />
        )}

        {/* 城市标记圆点 */}
        {routeCities.map((city, i) => {
          const scale = interpolate(cityProgress(i), [0, 1], [0, 1], {
            extrapolateRight: 'clamp',
          })
          const isFirst = i === 0
          const isLast = i === routeCities.length - 1
          const circleColor = isFirst
            ? '#22c55e'
            : isLast
              ? '#f97316'
              : traceColor

          return (
            <g key={city.name} transform={`translate(${city.x}, ${city.y})`}>
              {isLast && showPulse && (
                <circle
                  r={14 * pulseScale}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  opacity={pulseOpacity}
                />
              )}
              <circle
                r={isFirst || isLast ? 12 : 8}
                fill={circleColor}
                stroke="#050d1a"
                strokeWidth="3"
                transform={`scale(${scale})`}
                style={{ filter: `drop-shadow(0 0 5px ${circleColor})` }}
              />
            </g>
          )
        })}

        {/* 移动导航光点 */}
        {frame > 5 && routeCities.length > 0 && (
          <g transform={`translate(${dotX}, ${dotY})`}>
            <circle
              r={12}
              fill={dotColor}
              stroke="#050d1a"
              strokeWidth="3"
              style={{ filter: `drop-shadow(0 0 8px ${dotColor})` }}
            />
            <circle r={5} fill="#ffffff" />
          </g>
        )}
      </svg>

      {/* 标题 */}
      <div
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#e2e8f0',
          fontSize: 42,
          fontWeight: 700,
          letterSpacing: 4,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 108,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#64748b',
          fontSize: 20,
          letterSpacing: 3,
          opacity: interpolate(frame, [10, 30], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {subtitle}
      </div>

      {/* 右侧城市列表 */}
      <div
        style={{
          position: 'absolute',
          right: 80,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 260,
          background: 'rgba(5, 13, 26, 0.92)',
          border: '1px solid #1e3a5f',
          borderRadius: 14,
          padding: '24px 28px',
          opacity: interpolate(frame, [20, 50], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        <div
          style={{
            color: '#64748b',
            fontSize: 14,
            letterSpacing: 3,
            marginBottom: 18,
          }}
        >
          路线站点
        </div>
        {routeCities.map((city, i) => {
          const lit = cityLit(i)
          const isFirst = i === 0
          const isLast = i === routeCities.length - 1
          const dotColorVal = isFirst
            ? '#22c55e'
            : isLast
              ? '#f97316'
              : traceColor
          return (
            <div
              key={city.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
                transition: 'opacity 0.2s',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: lit ? dotColorVal : '#1e3a5f',
                  boxShadow: lit ? `0 0 6px ${dotColorVal}` : 'none',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: lit ? '#f1f5f9' : '#334155',
                  fontSize: 20,
                  fontWeight: isFirst || isLast ? 700 : 400,
                }}
              >
                {city.name}
              </span>
            </div>
          )
        })}
      </div>

      {/* 左侧信息面板 */}
      <div
        style={{
          position: 'absolute',
          left: 760,
          top: 170,
          width: 320,
          opacity: interpolate(frame, [30, 60], [0, 1], {
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {[
          { label: '起点', value: firstCityName, color: '#22c55e' },
          { label: '终点', value: lastCityName, color: '#f97316' },
          { label: '途经站点', value: passCountText, color: traceColor },
          { label: '预计距离', value: distanceText, color: '#e2e8f0' },
        ].map((item, i) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #0e1e30',
              opacity: interpolate(frame, [40 + i * 10, 60 + i * 10], [0, 1], {
                extrapolateRight: 'clamp',
              }),
            }}
          >
            <span style={{ color: '#64748b', fontSize: 16 }}>{item.label}</span>
            <span
              style={{ color: item.color, fontSize: 18, fontWeight: 600 }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  )
}

export const mapPathTraceDefaultProps: MapPathTraceProps = {
  title: '西部走廊路线',
  subtitle: '台北 → 高雄',
  traceColor: '#38bdf8',
  dotColor: '#facc15',
  distanceText: '约 355 公里',
  passCountText: '5 个',
  speedFrameLimit: 110,
  cities: [
    { name: '台北', lat: 25.033, lng: 121.565 },
    { name: '桃园', lat: 24.994, lng: 121.301 },
    { name: '新竹', lat: 24.807, lng: 120.969 },
    { name: '台中', lat: 24.148, lng: 120.674 },
    { name: '嘉义', lat: 23.48, lng: 120.449 },
    { name: '台南', lat: 23.0, lng: 120.227 },
    { name: '高雄', lat: 22.627, lng: 120.301 },
  ],
}
