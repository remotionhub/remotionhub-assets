import { Composition, registerRoot } from 'remotion'
import { YtAcqRetRef, ytAcqRetRefDefaultProps } from './YtAcqRetRef'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAcqRetRef"
      component={YtAcqRetRef}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAcqRetRefDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
