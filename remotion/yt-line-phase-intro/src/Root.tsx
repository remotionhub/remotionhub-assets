import { Composition, registerRoot } from 'remotion'
import { YtLinePhaseIntro, ytLinePhaseIntroDefaultProps } from './YtLinePhaseIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLinePhaseIntro"
      component={YtLinePhaseIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLinePhaseIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
