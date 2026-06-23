import { Composition, registerRoot } from 'remotion'
import { YtThreeDimensions, ytThreeDimensionsDefaultProps } from './YtThreeDimensions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeDimensions"
      component={YtThreeDimensions}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeDimensionsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
