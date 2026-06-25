import { Composition, registerRoot } from 'remotion'
import { YtInfluencerDms, ytInfluencerDmsDefaultProps , INFLUENCER_DMS_DURATION_FRAMES } from './YtInfluencerDms'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInfluencerDms"
      component={YtInfluencerDms}
      durationInFrames={INFLUENCER_DMS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInfluencerDmsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
