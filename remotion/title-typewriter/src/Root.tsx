import { Composition, registerRoot } from 'remotion'
import { TitleTypewriter, titleTypewriterDefaultProps } from './TitleTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleTypewriter"
      component={TitleTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleTypewriterDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
