import { Composition, registerRoot } from 'remotion'
import { YtExclusiveApp, ytExclusiveAppDefaultProps } from './YtExclusiveApp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExclusiveApp"
      component={YtExclusiveApp}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExclusiveAppDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
