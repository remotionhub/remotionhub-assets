import { Composition, registerRoot } from 'remotion'
import { YtMcpPipeline, ytMcpPipelineDefaultProps , MCP_PIPELINE_DURATION_FRAMES } from './YtMcpPipeline'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpPipeline"
      component={YtMcpPipeline}
      durationInFrames={MCP_PIPELINE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpPipelineDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
