import { Composition, registerRoot } from 'remotion'
import { SubtitleCinematic, subtitleCinematicDefaultProps } from './SubtitleCinematic'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleCinematic"
      component={SubtitleCinematic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleCinematicDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
