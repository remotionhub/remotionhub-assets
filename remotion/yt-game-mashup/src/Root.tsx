import { Composition, registerRoot } from 'remotion'
import { YtGameMashup, ytGameMashupDefaultProps } from './YtGameMashup'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGameMashup"
      component={YtGameMashup}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGameMashupDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
