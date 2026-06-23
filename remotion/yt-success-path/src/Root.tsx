import { Composition, registerRoot } from 'remotion'
import { YtSuccessPath, ytSuccessPathDefaultProps } from './YtSuccessPath'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSuccessPath"
      component={YtSuccessPath}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSuccessPathDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
