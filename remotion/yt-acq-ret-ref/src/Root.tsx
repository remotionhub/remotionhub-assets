import { Composition, registerRoot } from 'remotion'
import { YtAcqRetRef, ytAcqRetRefDefaultProps, ACQ_RET_REF_DURATION_FRAMES } from './YtAcqRetRef'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAcqRetRef"
      component={YtAcqRetRef}
      durationInFrames={ACQ_RET_REF_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAcqRetRefDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
