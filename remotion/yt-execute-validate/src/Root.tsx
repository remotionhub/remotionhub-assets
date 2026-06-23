import { Composition, registerRoot } from 'remotion'
import { YtExecuteValidate, ytExecuteValidateDefaultProps } from './YtExecuteValidate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExecuteValidate"
      component={YtExecuteValidate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExecuteValidateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
