import { Composition, registerRoot } from 'remotion'
import { YtProductOverflow, ytProductOverflowDefaultProps, PRODUCT_OVERFLOW_DURATION_FRAMES } from './YtProductOverflow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtProductOverflow"
      component={YtProductOverflow}
      durationInFrames={PRODUCT_OVERFLOW_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytProductOverflowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
