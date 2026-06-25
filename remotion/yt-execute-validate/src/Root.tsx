import { Composition, registerRoot } from 'remotion'
import { YtExecuteValidate, ytExecuteValidateDefaultProps, EXECUTE_VALIDATE_DURATION_FRAMES } from './YtExecuteValidate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExecuteValidate"
      component={YtExecuteValidate}
      durationInFrames={EXECUTE_VALIDATE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExecuteValidateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
