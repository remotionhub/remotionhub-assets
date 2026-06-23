import { Composition, registerRoot } from 'remotion'
import { YtTooManyCoincidences, ytTooManyCoincidencesDefaultProps } from './YtTooManyCoincidences'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTooManyCoincidences"
      component={YtTooManyCoincidences}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTooManyCoincidencesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
