import { Composition, registerRoot } from 'remotion'
import { IntroParticleBurst, introParticleBurstDefaultProps } from './IntroParticleBurst'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroParticleBurst"
      component={IntroParticleBurst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introParticleBurstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
