import { Composition, registerRoot } from 'remotion'
import { SubtitleKaraoke, subtitleKaraokeDefaultProps } from './SubtitleKaraoke'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleKaraoke"
      component={SubtitleKaraoke}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleKaraokeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
