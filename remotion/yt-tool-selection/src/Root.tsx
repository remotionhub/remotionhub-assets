import { Composition, registerRoot } from 'remotion'
import {
  YtToolSelection,
  ytToolSelectionDefaultProps,
  TOOL_SELECTION_DURATION_FRAMES,
} from './YtToolSelection'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolSelection"
      component={YtToolSelection}
      durationInFrames={TOOL_SELECTION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolSelectionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
