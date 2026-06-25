import { Composition, registerRoot } from 'remotion'
import { YtGenericMeansLacking, ytGenericMeansLackingDefaultProps } from './YtGenericMeansLacking'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericMeansLacking"
      component={YtGenericMeansLacking}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericMeansLackingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
