import { Composition, registerRoot } from 'remotion'
import { YtArcadeBeatEmUp, ytArcadeBeatEmUpDefaultProps } from './YtArcadeBeatEmUp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtArcadeBeatEmUp"
      component={YtArcadeBeatEmUp}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytArcadeBeatEmUpDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
