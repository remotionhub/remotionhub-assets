import { Composition, registerRoot } from 'remotion'
import { IntroTypewriter, introTypewriterDefaultProps } from './IntroTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroTypewriter"
      component={IntroTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introTypewriterDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
