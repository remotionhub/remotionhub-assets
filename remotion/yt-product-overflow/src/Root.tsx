import { Composition, registerRoot } from 'remotion'
import { YtProductOverflow, ytProductOverflowDefaultProps } from './YtProductOverflow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtProductOverflow"
      component={YtProductOverflow}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytProductOverflowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
