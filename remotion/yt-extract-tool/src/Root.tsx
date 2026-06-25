import { Composition, registerRoot } from 'remotion'
import { YtExtractTool, ytExtractToolDefaultProps } from './YtExtractTool'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExtractTool"
      component={YtExtractTool}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExtractToolDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
