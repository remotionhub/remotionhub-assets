import { Composition, registerRoot } from 'remotion'
import { YtFirstVersion, ytFirstVersionDefaultProps } from './YtFirstVersion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstVersion"
      component={YtFirstVersion}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstVersionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
