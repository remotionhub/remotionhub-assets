import { Composition, registerRoot } from 'remotion'
import { YtArcadeBeatEmUp, ytArcadeBeatEmUpDefaultProps, ARCADE_BEAT_EM_UP_DURATION_FRAMES } from './YtArcadeBeatEmUp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtArcadeBeatEmUp"
      component={YtArcadeBeatEmUp}
      durationInFrames={ARCADE_BEAT_EM_UP_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytArcadeBeatEmUpDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
