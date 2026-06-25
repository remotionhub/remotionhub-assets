import { Composition, registerRoot } from 'remotion'
import { YtFirstVersion, ytFirstVersionDefaultProps, FIRST_VERSION_DURATION_FRAMES } from './YtFirstVersion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstVersion"
      component={YtFirstVersion}
      durationInFrames={FIRST_VERSION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstVersionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
