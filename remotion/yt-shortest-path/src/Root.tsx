import { Composition, registerRoot } from 'remotion'
import { YtShortestPath, ytShortestPathDefaultProps , SHORTEST_PATH_DURATION_FRAMES } from './YtShortestPath'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShortestPath"
      component={YtShortestPath}
      durationInFrames={SHORTEST_PATH_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShortestPathDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
