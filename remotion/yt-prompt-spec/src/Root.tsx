import { Composition, registerRoot } from 'remotion'
import { YtPromptSpec, ytPromptSpecDefaultProps } from './YtPromptSpec'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptSpec"
      component={YtPromptSpec}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptSpecDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
