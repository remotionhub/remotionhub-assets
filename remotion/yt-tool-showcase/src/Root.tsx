import { Composition, registerRoot } from 'remotion'
import { YtToolShowcase, ytToolShowcaseDefaultProps , TOOL_SHOWCASE_DURATION_FRAMES } from './YtToolShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolShowcase"
      component={YtToolShowcase}
      durationInFrames={TOOL_SHOWCASE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolShowcaseDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
