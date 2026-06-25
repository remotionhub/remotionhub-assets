import { Composition, registerRoot } from 'remotion'
import { YtUserIterate, ytUserIterateDefaultProps } from './YtUserIterate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtUserIterate"
      component={YtUserIterate}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytUserIterateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
