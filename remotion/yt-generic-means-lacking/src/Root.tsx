import { Composition, registerRoot } from 'remotion'
import { YtGenericMeansLacking, ytGenericMeansLackingDefaultProps , GENERIC_MEANS_LACKING_DURATION_FRAMES } from './YtGenericMeansLacking'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericMeansLacking"
      component={YtGenericMeansLacking}
      durationInFrames={GENERIC_MEANS_LACKING_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericMeansLackingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
