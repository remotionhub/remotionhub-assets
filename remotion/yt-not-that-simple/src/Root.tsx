import { Composition, registerRoot } from 'remotion'
import { YtNotThatSimple, ytNotThatSimpleDefaultProps } from './YtNotThatSimple'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotThatSimple"
      component={YtNotThatSimple}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotThatSimpleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
