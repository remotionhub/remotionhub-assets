import { Composition, registerRoot } from 'remotion'
import { YtPencilIntro, ytPencilIntroDefaultProps } from './YtPencilIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPencilIntro"
      component={YtPencilIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPencilIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
