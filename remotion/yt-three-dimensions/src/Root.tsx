import { Composition, registerRoot } from 'remotion'
import { YtThreeDimensions, ytThreeDimensionsDefaultProps , THREE_DIMENSIONS_DURATION_FRAMES } from './YtThreeDimensions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeDimensions"
      component={YtThreeDimensions}
      durationInFrames={THREE_DIMENSIONS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeDimensionsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
