import { Composition, registerRoot } from 'remotion'
import { TitleStaggerLines, titleStaggerLinesDefaultProps } from './TitleStaggerLines'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleStaggerLines"
      component={TitleStaggerLines}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleStaggerLinesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
