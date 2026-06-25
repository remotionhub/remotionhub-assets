import { Composition, registerRoot } from 'remotion'
import { YtCustomizeOwn, ytCustomizeOwnDefaultProps, CUSTOMIZE_OWN_DURATION_FRAMES } from './YtCustomizeOwn'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCustomizeOwn"
      component={YtCustomizeOwn}
      durationInFrames={CUSTOMIZE_OWN_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCustomizeOwnDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
