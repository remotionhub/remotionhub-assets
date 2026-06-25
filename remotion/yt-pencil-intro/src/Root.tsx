import { Composition, registerRoot } from 'remotion'
import { YtPencilIntro, ytPencilIntroDefaultProps, PENCIL_INTRO_DURATION_FRAMES } from './YtPencilIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPencilIntro"
      component={YtPencilIntro}
      durationInFrames={PENCIL_INTRO_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPencilIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
