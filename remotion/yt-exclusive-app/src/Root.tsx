import { Composition, registerRoot } from 'remotion'
import { YtExclusiveApp, ytExclusiveAppDefaultProps , EXCLUSIVE_APP_DURATION_FRAMES } from './YtExclusiveApp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExclusiveApp"
      component={YtExclusiveApp}
      durationInFrames={EXCLUSIVE_APP_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExclusiveAppDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
