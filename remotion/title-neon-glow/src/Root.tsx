import { Composition, registerRoot } from 'remotion'
import { TitleNeonGlow, titleNeonGlowDefaultProps } from './TitleNeonGlow'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleNeonGlow"
      component={TitleNeonGlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleNeonGlowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
