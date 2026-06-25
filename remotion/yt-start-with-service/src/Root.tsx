import { Composition, registerRoot } from 'remotion'
import { YtStartWithService, ytStartWithServiceDefaultProps , START_WITH_SERVICE_DURATION_FRAMES } from './YtStartWithService'

export function RemotionRoot() {
  return (
    <Composition
      id="YtStartWithService"
      component={YtStartWithService}
      durationInFrames={START_WITH_SERVICE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytStartWithServiceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
