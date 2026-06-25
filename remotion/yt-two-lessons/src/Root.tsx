import { Composition, registerRoot } from 'remotion'
import { YtTwoLessons, ytTwoLessonsDefaultProps, TWO_LESSONS_DURATION_FRAMES } from './YtTwoLessons'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoLessons"
      component={YtTwoLessons}
      durationInFrames={TWO_LESSONS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoLessonsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
