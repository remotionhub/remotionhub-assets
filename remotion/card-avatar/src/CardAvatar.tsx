import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'

export type CardAvatarProps = {
  name: string
  title: string
  avatarBorderColor: string
  avatarBackgroundColor: string
  avatarTextColor: string
  titleColor: string
  avatarStiffness: number
}

export const cardAvatarDefaultProps: CardAvatarProps = {
  name: 'Jane Smith',
  title: 'Creative Director',
  avatarBorderColor: '#a78bfa',
  avatarBackgroundColor: '#312e81',
  avatarTextColor: '#a78bfa',
  titleColor: '#c4b5fd',
  avatarStiffness: 160,
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function CardAvatar(props: CardAvatarProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const initials = getInitials(props.name)

  const slideProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 140 },
  })
  const avatarProgress = spring({
    frame: frame - 6,
    fps,
    config: { damping: 18, stiffness: props.avatarStiffness },
  })
  const textProgress = spring({
    frame: frame - 16,
    fps,
    config: { damping: 25, stiffness: 110 },
  })

  const x = interpolate(slideProgress, [0, 1], [-700, 0])
  const avatarScale = interpolate(avatarProgress, [0, 1], [0, 1], {
    extrapolateRight: 'clamp',
  })
  const textOpacity = interpolate(textProgress, [0, 0.5], [0, 1], {
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #0f0e1a 100%)',
        justifyContent: 'flex-end',
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          display: 'flex',
          alignItems: 'center',
          height: 90,
          background: '#1e1b4b',
          paddingRight: 52,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: `3px solid ${props.avatarBorderColor}`,
            background: props.avatarBackgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            marginLeft: 12,
            marginRight: 20,
            transform: `scale(${avatarScale})`,
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: props.avatarTextColor,
              fontFamily: 'sans-serif',
              lineHeight: 1,
            }}
          >
            {initials}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: textOpacity,
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              lineHeight: 1.15,
            }}
          >
            {props.name}
          </div>
          <div
            style={{
              fontSize: 20,
              color: props.titleColor,
              fontFamily: 'sans-serif',
              marginTop: 2,
            }}
          >
            {props.title}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  )
}
