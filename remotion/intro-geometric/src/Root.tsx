import { Composition, registerRoot } from 'remotion'
import { IntroGeometric, introGeometricDefaultProps } from './IntroGeometric'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroGeometric"
      component={IntroGeometric}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introGeometricDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
