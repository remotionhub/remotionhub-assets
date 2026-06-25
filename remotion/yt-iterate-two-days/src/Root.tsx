import { Composition, registerRoot } from 'remotion'
import { YtIterateTwoDays, ytIterateTwoDaysDefaultProps } from './YtIterateTwoDays'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIterateTwoDays"
      component={YtIterateTwoDays}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIterateTwoDaysDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
