import { Composition, registerRoot } from 'remotion'
import { TitleShimmer, titleShimmerDefaultProps } from './TitleShimmer'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleShimmer"
      component={TitleShimmer}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleShimmerDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
