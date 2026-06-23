import { Composition, registerRoot } from 'remotion'
import { IntroCountdown3, introCountdown3DefaultProps } from './IntroCountdown3'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCountdown3"
      component={IntroCountdown3}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCountdown3DefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
