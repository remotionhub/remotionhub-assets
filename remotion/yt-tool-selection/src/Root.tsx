import { Composition, registerRoot } from 'remotion'
import { YtToolSelection, ytToolSelectionDefaultProps } from './YtToolSelection'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolSelection"
      component={YtToolSelection}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolSelectionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
