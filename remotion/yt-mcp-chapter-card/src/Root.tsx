import { Composition, registerRoot } from 'remotion'
import { YtMcpChapterCard, ytMcpChapterCardDefaultProps } from './YtMcpChapterCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpChapterCard"
      component={YtMcpChapterCard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpChapterCardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
