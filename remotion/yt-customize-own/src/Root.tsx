import { Composition, registerRoot } from 'remotion'
import { YtCustomizeOwn, ytCustomizeOwnDefaultProps } from './YtCustomizeOwn'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCustomizeOwn"
      component={YtCustomizeOwn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCustomizeOwnDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
