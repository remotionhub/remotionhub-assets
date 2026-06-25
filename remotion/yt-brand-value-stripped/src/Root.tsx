import { Composition, registerRoot } from 'remotion'
import { YtBrandValueStripped, ytBrandValueStrippedDefaultProps , BRAND_VALUE_LEFT_DURATION_FRAMES } from './YtBrandValueStripped'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBrandValueStripped"
      component={YtBrandValueStripped}
      durationInFrames={BRAND_VALUE_LEFT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBrandValueStrippedDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
