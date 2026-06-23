import { Composition, registerRoot } from 'remotion'
import { IntroSplitScreen, introSplitScreenDefaultProps } from './IntroSplitScreen'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroSplitScreen"
      component={IntroSplitScreen}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introSplitScreenDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
