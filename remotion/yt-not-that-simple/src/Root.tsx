import { Composition, registerRoot } from 'remotion'
import { YtNotThatSimple, ytNotThatSimpleDefaultProps , NOT_THAT_SIMPLE_DURATION_FRAMES } from './YtNotThatSimple'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotThatSimple"
      component={YtNotThatSimple}
      durationInFrames={NOT_THAT_SIMPLE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotThatSimpleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
