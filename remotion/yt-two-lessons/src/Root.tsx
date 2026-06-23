import { Composition, registerRoot } from 'remotion'
import { YtTwoLessons, ytTwoLessonsDefaultProps } from './YtTwoLessons'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoLessons"
      component={YtTwoLessons}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoLessonsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
