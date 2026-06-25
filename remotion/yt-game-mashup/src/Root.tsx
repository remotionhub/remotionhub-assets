import { Composition, registerRoot } from 'remotion'
import { YtGameMashup, ytGameMashupDefaultProps, GAME_MASHUP_DURATION_FRAMES } from './YtGameMashup'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGameMashup"
      component={YtGameMashup}
      durationInFrames={GAME_MASHUP_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGameMashupDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
