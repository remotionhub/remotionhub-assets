import { Composition, registerRoot } from 'remotion'
import { YtPromptDev, ytPromptDevDefaultProps } from './YtPromptDev'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptDev"
      component={YtPromptDev}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptDevDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
