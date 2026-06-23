import { Composition, registerRoot } from 'remotion'
import { YtStartSmall, ytStartSmallDefaultProps } from './YtStartSmall'

export function RemotionRoot() {
  return (
    <Composition
      id="YtStartSmall"
      component={YtStartSmall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytStartSmallDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
