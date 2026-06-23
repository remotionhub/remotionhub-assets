import { Composition, registerRoot } from 'remotion'
import { YtStartWithService, ytStartWithServiceDefaultProps } from './YtStartWithService'

export function RemotionRoot() {
  return (
    <Composition
      id="YtStartWithService"
      component={YtStartWithService}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytStartWithServiceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
