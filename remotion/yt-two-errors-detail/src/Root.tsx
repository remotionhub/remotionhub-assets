import { Composition, registerRoot } from 'remotion'
import { YtTwoErrorsDetail, ytTwoErrorsDetailDefaultProps } from './YtTwoErrorsDetail'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoErrorsDetail"
      component={YtTwoErrorsDetail}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoErrorsDetailDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
