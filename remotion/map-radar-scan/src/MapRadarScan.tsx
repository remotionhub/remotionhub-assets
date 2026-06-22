import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import React from 'react'

export interface RadarCity {
  name: string
  lat: number
  lng: number
}

export interface MapRadarScanProps {
  title?: string
  subtitle?: string
  themeColor?: string
  bgColor?: string
  scanSpeed?: number
  tailDegrees?: number
  radarRadius?: number
  cities?: RadarCity[]
}

// 投影函数 Constants
const GEO = { lngMin: 119.5, lngMax: 122.5, latMin: 21.7, latMax: 25.5 }
const TAIWAN_CENTER = { lat: 23.7, lng: 120.9 }
const SVG_CENTER_X = 760
const SVG_CENTER_Y = 540

// 台湾轮廓原始地理座标
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

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

export function MapRadarScan({
  title = '▌ 台湾雷达扫描系统 v2.4',
  subtitle = 'TAIWAN RADAR SURVEILLANCE ACTIVE',
  themeColor = '#4ade80',
  bgColor = '#020b02',
  scanSpeed = 2,
  tailDegrees = 70,
  radarRadius = 390,
  cities = [],
}: MapRadarScanProps) {
  const frame = useCurrentFrame()

  const latScale = radarRadius / ((GEO.latMax - GEO.latMin) / 2)
  const lngScale = radarRadius / ((GEO.lngMax - GEO.lngMin) / 2)

  const projectToRadar = (lat: number, lng: number) => ({
    x: SVG_CENTER_X + (lng - TAIWAN_CENTER.lng) * lngScale,
    y: SVG_CENTER_Y - (lat - TAIWAN_CENTER.lat) * latScale,
  })

  const taiwanRadarPath =
    TAIWAN_OUTLINE.map(([lat, lng], i) => {
      const p = projectToRadar(lat, lng)
      return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`
    }).join(' ') + ' Z'

  const radarCities = cities.map((c) => {
    const p = projectToRadar(c.lat, c.lng)
    const dx = p.x - SVG_CENTER_X
    const dy = p.y - SVG_CENTER_Y
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90
    return { ...c, x: p.x, y: p.y, angle: (angle + 360) % 360 }
  })

  // 扫描线角度（每帧旋转 scanSpeed°）
  const scanAngle = (frame * scanSpeed) % 360
  const scanRad = toRad(scanAngle - 90)

  // 辅助雷达边线暗色
  const darkGreen = '#15803d'
  const darkerGreen = '#14532d'
  const gridGreen = '#061506'

  return (
    <AbsoluteFill
      style={{
        background: bgColor,
        fontFamily: 'monospace',
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 60,
          color: themeColor,
          fontSize: 15,
          letterSpacing: 4,
          opacity: 0.8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 78,
          left: 60,
          color: darkerGreen,
          fontSize: 12,
          letterSpacing: 3,
        }}
      >
        {subtitle}
      </div>

      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <clipPath id="radarClip">
            <circle cx={SVG_CENTER_X} cy={SVG_CENTER_Y} r={radarRadius} />
          </clipPath>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 背景格线 */}
        <rect width="1920" height="1080" fill={bgColor} />
        {Array.from({ length: 31 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 64}
            y1={0}
            x2={i * 64}
            y2={1080}
            stroke={gridGreen}
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 64}
            x2={1920}
            y2={i * 64}
            stroke={gridGreen}
            strokeWidth="1"
          />
        ))}

        {/* 雷达圆形背景 */}
        <circle
          cx={SVG_CENTER_X}
          cy={SVG_CENTER_Y}
          r={radarRadius}
          fill="#040f04"
          stroke={darkGreen}
          strokeWidth="2"
        />

        {/* 同心圆 */}
        {[0.25, 0.5, 0.75, 1].map((r, i) => (
          <circle
            key={i}
            cx={SVG_CENTER_X}
            cy={SVG_CENTER_Y}
            r={radarRadius * r}
            fill="none"
            stroke={darkerGreen}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* 十字线 */}
        <line
          x1={SVG_CENTER_X - radarRadius}
          y1={SVG_CENTER_Y}
          x2={SVG_CENTER_X + radarRadius}
          y2={SVG_CENTER_Y}
          stroke={darkerGreen}
          strokeWidth="1"
        />
        <line
          x1={SVG_CENTER_X}
          y1={SVG_CENTER_Y - radarRadius}
          x2={SVG_CENTER_X}
          y2={SVG_CENTER_Y + radarRadius}
          stroke={darkerGreen}
          strokeWidth="1"
        />

        {/* 斜线 */}
        {[45, 135].map((deg) => {
          const r = toRad(deg)
          return (
            <line
              key={deg}
              x1={SVG_CENTER_X - Math.cos(r) * radarRadius}
              y1={SVG_CENTER_Y - Math.sin(r) * radarRadius}
              x2={SVG_CENTER_X + Math.cos(r) * radarRadius}
              y2={SVG_CENTER_Y + Math.sin(r) * radarRadius}
              stroke={darkerGreen}
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          )
        })}

        {/* 台湾轮廓（裁剪在雷达圆内） */}
        <g clipPath="url(#radarClip)">
          <path
            d={taiwanRadarPath}
            fill="#083d08"
            stroke="#1a5e1a"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity={0.7}
          />
        </g>

        {/* 扫描尾迹（扇形） */}
        <g clipPath="url(#radarClip)">
          {Array.from({ length: tailDegrees }).map((_, i) => {
            const alpha = i / tailDegrees
            const angle = toRad(scanAngle - 90 - i)
            return (
              <line
                key={i}
                x1={SVG_CENTER_X}
                y1={SVG_CENTER_Y}
                x2={SVG_CENTER_X + Math.cos(angle) * radarRadius}
                y2={SVG_CENTER_Y + Math.sin(angle) * radarRadius}
                stroke={themeColor}
                strokeWidth="2"
                opacity={(1 - alpha) * 0.2}
              />
            )
          })}
        </g>

        {/* 扫描线（主线） */}
        <line
          x1={SVG_CENTER_X}
          y1={SVG_CENTER_Y}
          x2={SVG_CENTER_X + Math.cos(scanRad) * radarRadius}
          y2={SVG_CENTER_Y + Math.sin(scanRad) * radarRadius}
          stroke={themeColor}
          strokeWidth="3"
          style={{ filter: `drop-shadow(0 0 5px ${themeColor})` }}
          clipPath="url(#radarClip)"
        />

        {/* 城市目标点 */}
        {radarCities.map((city) => {
          const dx = city.x - SVG_CENTER_X
          const dy = city.y - SVG_CENTER_Y
          const targetAngle =
            ((Math.atan2(dy, dx) * 180) / Math.PI + 360 + 90) % 360

          const angleDiff = ((scanAngle - targetAngle) % 360 + 360) % 360
          const isFresh = angleDiff < 45
          const blinkIntensity = isFresh
            ? interpolate(angleDiff, [0, 45], [1, 0], {
                extrapolateRight: 'clamp',
              })
            : 0

          return (
            <g key={city.name} transform={`translate(${city.x}, ${city.y})`}>
              <circle
                r={18}
                fill="none"
                stroke={themeColor}
                strokeWidth="2"
                opacity={blinkIntensity * 0.7}
              />
              <circle
                r={5}
                fill={themeColor}
                opacity={blinkIntensity}
                style={{
                  filter:
                    blinkIntensity > 0.4
                      ? `drop-shadow(0 0 5px ${themeColor})`
                      : 'none',
                }}
              />
              <line
                x1="-12"
                y1="0"
                x2="12"
                y2="0"
                stroke={themeColor}
                strokeWidth="1.5"
                opacity={blinkIntensity * 0.6}
              />
              <line
                x1="0"
                y1="-12"
                x2="0"
                y2="12"
                stroke={themeColor}
                strokeWidth="1.5"
                opacity={blinkIntensity * 0.6}
              />
              <text
                x="22"
                y="5"
                fill={themeColor}
                fontSize="15"
                opacity={blinkIntensity * 0.9}
                fontFamily="monospace"
              >
                {city.name}
              </text>
            </g>
          )
        })}

        {/* 中心点 */}
        <circle
          cx={SVG_CENTER_X}
          cy={SVG_CENTER_Y}
          r={8}
          fill={themeColor}
          style={{ filter: `drop-shadow(0 0 10px ${themeColor})` }}
        />
        <circle
          cx={SVG_CENTER_X}
          cy={SVG_CENTER_Y}
          r={44}
          fill="url(#centerGlow)"
        />

        {/* 外圈刻度 */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = toRad(i * 10 - 90)
          const inner = i % 3 === 0 ? radarRadius - 18 : radarRadius - 10
          return (
            <line
              key={i}
              x1={SVG_CENTER_X + Math.cos(a) * inner}
              y1={SVG_CENTER_Y + Math.sin(a) * inner}
              x2={SVG_CENTER_X + Math.cos(a) * radarRadius}
              y2={SVG_CENTER_Y + Math.sin(a) * radarRadius}
              stroke={darkGreen}
              strokeWidth={i % 9 === 0 ? 2 : 1}
            />
          )
        })}
      </svg>

      {/* 右侧状态面板 */}
      <div
        style={{
          position: 'absolute',
          right: 60,
          top: 160,
          width: 260,
          color: themeColor,
          fontSize: 13,
          fontFamily: 'monospace',
          lineHeight: 2,
        }}
      >
        <div style={{ color: darkerGreen, marginBottom: 8 }}>// 系统状态</div>
        <div>扫描角度：{Math.round(scanAngle)}°</div>
        <div>目标数量：{radarCities.length}</div>
        <div>扫描半径：{radarRadius} px</div>
        <div style={{ marginTop: 20, color: darkerGreen }}>// 侦测城市</div>
        {radarCities.map((city) => {
          const dx = city.x - SVG_CENTER_X
          const dy = city.y - SVG_CENTER_Y
          const targetAngle =
            ((Math.atan2(dy, dx) * 180) / Math.PI + 360 + 90) % 360
          const angleDiff = ((scanAngle - targetAngle) % 360 + 360) % 360
          const active = angleDiff < 45
          return (
            <div
              key={city.name}
              style={{ color: active ? themeColor : darkerGreen }}
            >
              {active ? '▶' : '○'} {city.name}
            </div>
          )
        })}
      </div>

      {/* 左下角角度显示 */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: 60,
          color: darkerGreen,
          fontSize: 12,
          fontFamily: 'monospace',
          letterSpacing: 2,
        }}
      >
        SCAN: {String(Math.round(scanAngle)).padStart(3, '0')}° RANGE:{' '}
        {radarRadius}m MODE: ACTIVE
      </div>
    </AbsoluteFill>
  )
}

export const mapRadarScanDefaultProps: MapRadarScanProps = {
  title: '▌ 台湾雷达扫描系统 v2.4',
  subtitle: 'TAIWAN RADAR SURVEILLANCE ACTIVE',
  themeColor: '#4ade80',
  bgColor: '#020b02',
  scanSpeed: 2,
  tailDegrees: 70,
  radarRadius: 390,
  cities: [
    { name: '台北', lat: 25.033, lng: 121.565 },
    { name: '新竹', lat: 24.807, lng: 120.969 },
    { name: '台中', lat: 24.148, lng: 120.674 },
    { name: '台南', lat: 23.0, lng: 120.227 },
    { name: '高雄', lat: 22.627, lng: 120.301 },
    { name: '花莲', lat: 23.991, lng: 121.611 },
  ],
}
