import { Composition, registerRoot } from 'remotion'
import { YtMcpChapterCard, ytMcpChapterCardDefaultProps , MCP_CHAPTER_CARD_DURATION_FRAMES } from './YtMcpChapterCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpChapterCard"
      component={YtMcpChapterCard}
      durationInFrames={MCP_CHAPTER_CARD_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpChapterCardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
