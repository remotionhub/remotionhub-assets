import { Composition, registerRoot } from 'remotion'
import { YtLinePhaseIntro, ytLinePhaseIntroDefaultProps , LINE_PHASE_INTRO_DURATION_FRAMES } from './YtLinePhaseIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLinePhaseIntro"
      component={YtLinePhaseIntro}
      durationInFrames={LINE_PHASE_INTRO_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLinePhaseIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
