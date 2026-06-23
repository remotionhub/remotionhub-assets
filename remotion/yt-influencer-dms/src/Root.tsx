import { Composition, registerRoot } from 'remotion'
import { YtInfluencerDms, ytInfluencerDmsDefaultProps } from './YtInfluencerDms'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInfluencerDms"
      component={YtInfluencerDms}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInfluencerDmsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
