import { Composition, registerRoot } from 'remotion'
import { SubtitleSlide, subtitleSlideDefaultProps } from './SubtitleSlide'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleSlide"
      component={SubtitleSlide}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleSlideDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
