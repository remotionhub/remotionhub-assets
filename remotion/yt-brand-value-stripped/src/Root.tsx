import { Composition, registerRoot } from 'remotion'
import { YtBrandValueStripped, ytBrandValueStrippedDefaultProps } from './YtBrandValueStripped'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBrandValueStripped"
      component={YtBrandValueStripped}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBrandValueStrippedDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
