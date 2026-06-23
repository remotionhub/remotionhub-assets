import { Composition, registerRoot } from 'remotion'
import { YtManualFirst, ytManualFirstDefaultProps } from './YtManualFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtManualFirst"
      component={YtManualFirst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytManualFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
