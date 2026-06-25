import { Composition, registerRoot } from 'remotion'
import { YtFourAiTools, ytFourAiToolsDefaultProps } from './YtFourAiTools'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFourAiTools"
      component={YtFourAiTools}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFourAiToolsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
