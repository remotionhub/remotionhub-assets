import { Composition, registerRoot } from 'remotion'
import { YtExtractTool, ytExtractToolDefaultProps, EXTRACT_TOOL_DURATION_FRAMES } from './YtExtractTool'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExtractTool"
      component={YtExtractTool}
      durationInFrames={EXTRACT_TOOL_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExtractToolDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
