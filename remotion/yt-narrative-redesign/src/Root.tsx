import { Composition, registerRoot } from 'remotion'
import { YtNarrativeRedesign, ytNarrativeRedesignDefaultProps , NARRATIVE_REDESIGN_DURATION_FRAMES } from './YtNarrativeRedesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNarrativeRedesign"
      component={YtNarrativeRedesign}
      durationInFrames={NARRATIVE_REDESIGN_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNarrativeRedesignDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
