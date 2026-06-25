import { Composition, registerRoot } from 'remotion'
import {
  YtSuccessPath,
  ytSuccessPathDefaultProps,
  SUCCESS_PATH_DURATION_FRAMES,
} from './YtSuccessPath'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSuccessPath"
      component={YtSuccessPath}
      durationInFrames={SUCCESS_PATH_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSuccessPathDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
