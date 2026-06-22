import { Composition, registerRoot } from 'remotion'
import { TitleHandwriting, titleHandwritingDefaultProps } from './TitleHandwriting'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleHandwriting"
      component={TitleHandwriting}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleHandwritingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
