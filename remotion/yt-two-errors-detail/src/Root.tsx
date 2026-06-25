import { Composition, registerRoot } from 'remotion'
import { YtTwoErrorsDetail, ytTwoErrorsDetailDefaultProps, TWO_ERRORS_DETAIL_DURATION_FRAMES } from './YtTwoErrorsDetail'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoErrorsDetail"
      component={YtTwoErrorsDetail}
      durationInFrames={TWO_ERRORS_DETAIL_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoErrorsDetailDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
