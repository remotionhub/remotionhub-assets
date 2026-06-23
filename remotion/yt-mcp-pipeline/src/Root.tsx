import { Composition, registerRoot } from 'remotion'
import { YtMcpPipeline, ytMcpPipelineDefaultProps } from './YtMcpPipeline'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpPipeline"
      component={YtMcpPipeline}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpPipelineDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
