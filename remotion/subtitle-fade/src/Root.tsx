import { Composition, registerRoot } from 'remotion'
import { SubtitleFade, subtitleFadeDefaultProps } from './SubtitleFade'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleFade"
      component={SubtitleFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleFadeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
