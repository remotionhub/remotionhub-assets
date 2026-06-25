import { Composition, registerRoot } from 'remotion'
import { YtTooManyCoincidences, ytTooManyCoincidencesDefaultProps , TOO_MANY_COINCIDENCES_DURATION_FRAMES } from './YtTooManyCoincidences'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTooManyCoincidences"
      component={YtTooManyCoincidences}
      durationInFrames={TOO_MANY_COINCIDENCES_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTooManyCoincidencesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
