import { Composition, registerRoot } from 'remotion'
import { TitleScramble, titleScrambleDefaultProps } from './TitleScramble'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleScramble"
      component={TitleScramble}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleScrambleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
