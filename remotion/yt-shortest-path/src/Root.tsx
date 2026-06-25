import { Composition, registerRoot } from 'remotion'
import { YtShortestPath, ytShortestPathDefaultProps } from './YtShortestPath'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShortestPath"
      component={YtShortestPath}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShortestPathDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
